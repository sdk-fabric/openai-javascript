
# openai-javascript

This [SDK](https://github.com/sdk-fabric/openai-javascript) is managed by the [SDK Fabric](https://sdk-fabric.org/) project, a global infrastructure to
automatically generate SDKs for every API.

You can find more information about this SDK at [TypeHub](https://typehub.cloud/):
https://app.typehub.cloud/d/sdkfabric/openai

## Usage

```typescript
const client = Client::build('[access_token]');

// Creates a model response for the given chat conversation.
const response = await client.completions().create(new CompletionRequest());

// Delete a stored chat completion.
const response = await client.completions().delete("completion_id");

// List stored Chat Completions.
const response = await client.completions().getall("after", 1, "model", "order");

// Creates a model response.
const response = await client.responses().create(new ResponseRequest());
```
