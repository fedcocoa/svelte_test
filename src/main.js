import App from './App.svelte';
import Counter from './Counter.svelte';

const app = new App({target: document.body});

for(let i = 0; i < 5; i++) {
    let current = new Counter({target: document.body, props: {name: i}});
};

export default app;