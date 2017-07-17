describe("Ignored test", () => {
	it('should be ignored', () => {
		throw new Error("Not ignored");
	});
});
