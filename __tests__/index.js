import path from 'path';
import stylelint from 'stylelint';

const config = {
    extends: [
        'stylelint-config-standard',
        path.join(__dirname, '..'),
    ],
    rules: {
        indentation: 4,
    },
};

const checkResults = (data) => {
    const {errored, results} = data;
    const {warnings} = results[0];
    expect(errored).toBeFalsy();
    expect(warnings).toHaveLength(0);
};

describe('lost atrules', () => {
    it('should throw neither an error nor warning for @lost atrule', () => {
        return stylelint.lint({
            files: "./fixtures/atrules.css",
            config,
        }).then(checkResults);
    });
});

describe('lost properties', () => {
    it('should throw neither an error nor warning for lost props', () => {
        return stylelint.lint({
            files: "./fixtures/properties.css",
            config,
        }).then(checkResults);
    });
});
