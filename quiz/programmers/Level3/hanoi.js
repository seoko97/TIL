function solution(n) {
	const answer = [];

	function hanoi(n, from, to) {
		const by = 6 - from - to;
		console.log(n, from, to, by);

		if (n === 1) {
			answer.push([from, to]);
		} else {
			hanoi(n - 1, from, by);
			answer.push([from, to]);
			hanoi(n - 1, by, to);
		}
	}
	hanoi(n, 1, 3);

	return answer;
}

const n1 = 2;

console.log(solution(n1));
