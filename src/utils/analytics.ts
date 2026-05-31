import posthog from "posthog-js";

export const capture = (
  event: string,
  props?: Record<string, unknown>,
): void => posthog.capture(event, props);
