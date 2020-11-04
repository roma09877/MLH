const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');
describe('Inputs', function () {
    describe('Inputs are displayed', function () {
        it('TC-014 Name ', function () {
            browser.url('');
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });
        it('TC-015 Gender (he)', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-016 Gender (she)', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-017 Gender (it)', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-018 Age', function () {
            const label = $(sel.age).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-019 Story', function () {
            const label = $(sel.story).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-020 Create', function () {
            const label = $(sel.create).isDisplayed();
            expect(label).toEqual(true);
        });
    });
});

// describe('Placeholders are correct', function () {
//
//     it('TC-022 Placeholder for Name is Hero\'s name', function () {
//         const placeholder = $(sel.name).getAttribute('placeholder');
//         expect(placeholder).toEqual(exp.placeholderName);
//     });
//     it('TC-023 Placeholder for Age is Hero\'s age', function () {
//         const placeholder = $(sel.age).getAttribute('placeholder');
//         expect(placeholder).toEqual(exp.placeholderAge);
//     });
//     it('TC-024 Placeholder for Type of story is Type of the story', function () {
//         const placeholder = $(sel.story).getText();
//         expect(placeholder).toEqual(exp.placeholderStory);
//     });
//
//     it('TC-025 Placeholder for she', function () {
//     const placeholder = $$('.ant-radio-input')[1].getValue();
//     expect(placeholder).toEqual(exp.placeholderShe);
//     });
//
//     it('TC-026 Placeholder for he', function () {
//     const placeholder = $$('.ant-radio-input')[0].getValue();
//     expect(placeholder).toEqual(exp.placeholderHe);
//     });
//
//     it('TC-027 Placeholder for it', function () {
//     const placeholder = $$('.ant-radio-input')[2].getValue();
//     expect(placeholder).toEqual(exp.placeholderIt);
// });
describe ('input field name', function () {

    // it('TC - 010 name has a 70 symbol\'s limit' , function () {
    //     const symbolLimit = $(sel.name).addValue('SJHI6515635?><*-+');
    //     expect(symbolLimit).toEqual('SJHI6515635?><*-+');
    // });
    // it('TC - 11 accepts only digits 0 - 9', function () {
    //     const onlyDigits = $(sel.name).addValue('0123456789');
    //     expect(onlyDigits).toEqual(exp.digits);
    // });
    it('TC - 11 accepts only letters', function () {
        const onlyLetters = $(sel.name).addValue('ABCDabcdEFGHefghIJKLijklOPQRopqrSTUVstuvWXYZwxyz');
        expect(onlyLetters).toEqual('ABCDabcdEFGHefghIJKLijklOPQRopqrSTUVstuvWXYZwxyz');
    });
});