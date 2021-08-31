import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'build/bundle.js'
    },
    plugins: [
        svelte(),
        // css({output: 'bundle.css'}),
        commonjs(),
        resolve({
            browser: true,
            dedupe: ['svelte']
        })
    ]
};