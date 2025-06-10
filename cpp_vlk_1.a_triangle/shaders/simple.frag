#version 460 core
// #extension GL_KHR_vulkan_glsl : enable

layout (location = 0) out vec4 frag_color;

void main() {
	frag_color = vec4(0.9, 0.9, 0.0, 1.0);
}