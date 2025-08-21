import { memo, useState } from 'react';
import SearchComp from '../components/SearchComp';

const Search = () => {
    const [value, setValue] = useState<string>('');

    return (
        <div className="min-h-[70vh]">
            <SearchComp value={value} setValue={setValue}/>
        </div>
    );
};

export default memo(Search);