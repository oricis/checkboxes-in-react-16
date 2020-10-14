import React, { useState } from "react";
import Checkbox from "./Checkbox";

function App()
{
    const checkboxes = {
        "One": false,
        "Two": false,
        "Three": false
    }
    const [options, setOptions] = useState(checkboxes)


    const selectAllCheckboxes = isSelected => {
        const newCheckboxes = JSON.parse(JSON.stringify(checkboxes));
        Object.keys(checkboxes).map((key, value) => {
            newCheckboxes[key] = isSelected;
        });

        setOptions(newCheckboxes);
    };

    const selectAll = () => selectAllCheckboxes(true);

    const deselectAll = () => selectAllCheckboxes(false);

    const handleCheckboxChange = changeEvent => {
        console.log('clicked ' + changeEvent.target)
    };

    const createCheckbox = option => (
        <Checkbox
            label={option}
            isSelected={options[option]}
            onCheckboxChange={handleCheckboxChange}
            key={option}
        />
    );

    const createCheckboxes = () => Object.keys(checkboxes).map(createCheckbox);

    return (
        <form>
            {createCheckboxes()}

            <div className="form-group mt-2">
                <button
                    type="button"
                    className="btn btn-outline-primary mr-2"
                    onClick={selectAll}
                >Select All</button>
                <button
                    type="button"
                    className="btn btn-outline-primary mr-2"
                    onClick={deselectAll}
                >Deselect All</button>
            </div>
        </form>
    );
}

export default App;
