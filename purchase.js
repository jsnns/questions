const get_options = item => require(`./data/items/${item}.json`);

// goal
// maximize for (durability / cost) * effectiveness
// we want to find the most effective item that cost the least per time with
const get_score = item =>
	((item.durability * (item.effectiveness + 1)) / item.value) * 100;

const sort_by_score = items =>
	items.sort((a, b) => get_score(b) - get_score(a));

const pretty_print_score = score => `${score.toFixed(2)}%`;

/**
 * START SCRIPT
 */

let options = sort_by_score(get_options("shoes"));
options.forEach(item =>
	console.log(`${item.name}: ${pretty_print_score(get_score(item))}`)
);
