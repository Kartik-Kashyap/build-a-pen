import type { Plugin } from "vite";

function createNoopPlugin(name: string): Plugin {
	return {
		name,
	};
}

export default function sourceMapperPlugin() {
	return {
		name: "noop-source-mapper",
		visitor: {},
	};
}

export function devToolsPlugin(): Plugin {
	return createNoopPlugin("noop-dev-tools");
}

export function fullStoryPlugin(): Plugin {
	return createNoopPlugin("noop-fullstory");
}

export function errorInterceptorPlugin(): Plugin {
	return createNoopPlugin("noop-error-interceptor");
}

export function mediaVersionsPlugin(): Plugin {
	return createNoopPlugin("noop-media-versions");
}
