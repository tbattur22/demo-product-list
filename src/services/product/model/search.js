/* Business rules for Product domain */

export const startStopSearchTextLength = 2;

/**
 * Logic to handle product search input change event
 * @param {*} newInputValue new user input to search
 * @param {*} currentSearchText current searched value
 * @param {*} setCurInputValue set current input value state 
 * @param {*} setSearchText set search value state
 */
export function handleSearchInput(newInputValue, currentSearchText, setCurInputValue, setSearchText) {
    if (newInputValue.length > startStopSearchTextLength) {
        setCurInputValue(newInputValue);
        setSearchText(newInputValue);
    } else {
        if (currentSearchText.length > startStopSearchTextLength) {
            setCurInputValue('');
        } else {
            setCurInputValue(newInputValue);
        }
        setSearchText('');
    }
}