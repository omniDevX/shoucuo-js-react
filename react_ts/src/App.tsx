import { ArrayList } from './components/ArrayList';
import { JsonList } from './components/JsonList';
import { ArrayListRowComponent } from './components/ListRowComponent';
import { ChangeStatus } from './components/ChangeStatus';

function App() {
    return (
        <>
            <ArrayList />
            <ArrayListRowComponent />
            <JsonList />
            <ChangeStatus />
        </>
    );
}

export default App;