uniform float uTime;
varying vec2 vUv;
uniform sampler2D texture;

void main() {
    // Sample the texture color using the provided UV coordinates
    vec4 color = texture2D(texture, vUv);

    // Set the output color
    gl_FragColor = color;
}
