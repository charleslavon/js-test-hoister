export const doubleVal = (x = 0) => {
	return x * x;
};

export const tripleVal = (x = 0) => {
	return x * doubleVal(x);
};
