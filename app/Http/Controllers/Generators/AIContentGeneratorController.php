<?php

namespace App\Http\Controllers\Generators;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class AIContentGeneratorController extends Controller
{
    /** @var ?array<mixed> */
    public ?array $responseRaw;
    public ?string $responseMessage;
    protected string $apiKey = '';
    protected string $model = 'gpt-3.5-turbo';
    protected string $temperature = '0.5';
    /** @var array<string> */
    protected array $allowedModels = [
        'gpt-3.5-turbo',
        'gpt-3.5-turbo-1106',
        'gpt-4',
        'gpt-4-vision-preview'
    ];
    /** @var string */
    protected string $contentQuery;
    /** @var string */
    protected string $endPoint = 'https://api.openai.com/v1/chat/completions';

    public function index()
    {
        return Inertia::render('Backend/AI/Content/Generator/Index');
    }

    public function generateText(Request $request)
    {
        $request->validate([
            'text_prompt' => 'required|string',
            'model' => 'required|string|in:' . implode(',', $this->allowedModels),
        ]);

        $this->apiKey = config('configuration.openai_api_key');
        $this->model = $request->input('model');
        $this->contentQuery = $request->input('text_prompt');
        $this->temperature = $request->input('temperature');

        $response = $this->callAIModel();

        return response()->json([
            'data' => $response
        ]);


        // Logic to interact with AI API (e.g., OpenAI API, GPT-4)
        // $generatedText = $this->callAIModel($request->input('text_prompt'));

        // Store the result in the database
        // AITextGenerator::create([
        //     'api_key' => $request->input('api_key'),
        //     'text_prompt' => $request->input('text_prompt'),
        //     'generated_text' => $generatedText,
        // ]);

        // return redirect()->route('ai-text-generator.index')->with('success', 'Text Generated Successfully');
    }

    protected function callAIModel()
    {
        // // Call AI models using a 3rd party REST API
        // $response = Http::post('https://api.openai.com/v1/completions', [
        //     'model' => 'gpt-4',
        //     'prompt' => $prompt,
        // ]);

        // return $response->json('choices.0.text');

        return Http::withToken($this->apiKey)->acceptJson()->post($this->endPoint, [
            "model" => $this->model,
            "messages" => [["role" => "user", "content" => $this->contentQuery]],
            "temperature" => $this->temperature,
        ]);
    }
}