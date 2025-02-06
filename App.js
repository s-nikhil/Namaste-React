const heading = React.createElement('h1', { id: 'heading' }, [React.createElement('p', { id: 'heading', key: 'child1' }, 'Hello from React world p1!'), React.createElement('p', { id: 'heading', key: 'child2' }, 'Hello from React world p2!')]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);