export const extractErrors = inner => {
    return inner.reduce((acc, err) => {
        let messages = acc[err.path] || [];
        acc[err.path] = [...messages, err.message];
        return acc;
    }, {});
};