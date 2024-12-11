import { sum } from '@packages/shared';

export default function Shop() {
	const value = sum(2, 4);

	return (
		<div>
			<span>Sum value: {value}</span>
		</div>
	);
}
