const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = employers
.filter(item => item && item !== ' ')
.map(item => item.toLowerCase().trim())
.map(item => item[0].toUpperCase() + item.slice(1));

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = ({cash}) => total = cash.reduce((acc, item) => acc + item);

const lesson = calcCash(data);

function makeBusiness(director, allModule, gang, course, teacher = 'Максим') {
	const sumTech = data.react.concat(data.add, 'и другие').join(' ');
	console.log(`
		Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}. 
		Команда Академии: ${gang}
		Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!
		Технологии которые мы изучим: 
		${sumTech}
	`);
}
