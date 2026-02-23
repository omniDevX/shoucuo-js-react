import { ArrayList } from './components/ArrayList';
import { JsonList } from './components/JsonList';
import { ArrayListRowComponent } from './components/ListRowComponent';
import { ChangeStatus } from './components/ChangeStatus';
import { Rest } from './components/Rest';

function App() {
    return (
        <>
            {/* <ArrayList /> */}
            <ArrayListRowComponent />
            {/* <JsonList /> */}
            <ChangeStatus />
            <Rest />
        </>
    );
}

export default App;