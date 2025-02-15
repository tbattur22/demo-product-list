import {handleSearchInput} from './search';

describe('Seach box logic works correctly', () => {
    test('Search should not start when length of input value is less than 3 characters', async () => {
        const mockSetCurInputValue = jest.fn(x => x);
        const mockSetSearchText = jest.fn(y => y);
    
        let newInput = "P";
        let curSearchText = "";
        handleSearchInput(newInput, curSearchText, mockSetCurInputValue, mockSetSearchText);

        // make sure search text is set to empty string
        expect(mockSetSearchText.mock.calls[0][0]).toBe('');
        // make sure current input value set to new input value
        expect(mockSetCurInputValue.mock.calls[0][0]).toBe(newInput);

        newInput = "Po";
        curSearchText = "";
        handleSearchInput(newInput, curSearchText, mockSetCurInputValue, mockSetSearchText);

        // make sure search text is set to empty string
        expect(mockSetSearchText.mock.calls[1][0]).toBe('');
        // make sure current input value set to new input value
        expect(mockSetCurInputValue.mock.calls[1][0]).toBe(newInput);
    });
    
    test('Search should start when length of input value equals to 3 or more characters', () => {
        const mockSetCurInputValue = jest.fn(x => x);
        const mockSetSearchText = jest.fn(y => y);
    
        let newInput = "Pow";
        let curSearchText = "";
        handleSearchInput(newInput, curSearchText, mockSetCurInputValue, mockSetSearchText);

        // make sure search text is set to new input value
        expect(mockSetSearchText.mock.calls[0][0]).toBe('Pow');
        // make sure current input value set to new input value
        expect(mockSetCurInputValue.mock.calls[0][0]).toBe(newInput);

        newInput = "Powder";
        curSearchText = "Powde";
        handleSearchInput(newInput, curSearchText, mockSetCurInputValue, mockSetSearchText);

        // make sure search text is set to empty string
        expect(mockSetSearchText.mock.calls[1][0]).toBe('Powder');
        // make sure current input value set to new input value
        expect(mockSetCurInputValue.mock.calls[1][0]).toBe(newInput);
    });
})
