/**
 * CompletionRequest automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {CompletionMessage} from "./CompletionMessage";

export interface CompletionRequest {
    model?: string
    messages?: Array<CompletionMessage>
    frequency_penalty?: number
    logit_bias?: Record<string, number>
    logprobs?: boolean
    max_completion_tokens?: number
    metadata?: Record<string, string>
    presence_penalty?: number
    reasoning_effort?: string
    seed?: number
    service_tier?: string
    stop?: Array<string>
    store?: boolean
    temperature?: number
    top_logprobs?: number
    top_p?: number
    user?: string
}

