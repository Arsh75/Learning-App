export const gradesData = {
    1: {
        subjects: [
            {
                id: 'math-1',
                title: 'Math Adventure',
                icon: 'Calculator',
                color: 'orange',
                lessons: [
                    {
                        id: 'm1-l1',
                        title: 'Counting 1 to 10',
                        level: 1,
                        type: 'counting',
                        content: {
                            target: 5,
                            items: '🍎',
                            options: [3, 5, 2, 8]
                        }
                    },
                    {
                        id: 'm1-l2',
                        title: 'Addition Fun',
                        level: 2,
                        type: 'math_basic',
                        content: {
                            equation: '2 + 3',
                            answer: 5,
                            options: [4, 5, 6, 7]
                        }
                    },
                    {
                        id: 'm1-l3',
                        title: 'Subtraction Fun',
                        level: 3,
                        type: 'math_basic',
                        content: {
                            equation: '5 - 2',
                            answer: 3,
                            options: [1, 2, 3, 4]
                        }
                    }
                ]
            },
            {
                id: 'eng-1',
                title: 'ABC World',
                icon: 'BookOpen',
                color: 'blue',
                lessons: [
                    {
                        id: 'e1-l1',
                        title: 'Alphabet Match',
                        level: 1,
                        type: 'matching',
                        content: {
                            word: 'APPLE',
                            missing: 'A',
                            options: ['A', 'B', 'C', 'D']
                        }
                    },
                    {
                        id: 'e1-l2',
                        title: 'Missing Letter',
                        level: 2,
                        type: 'matching',
                        content: {
                            word: 'BALL',
                            missing: 'B',
                            options: ['P', 'B', 'M', 'S']
                        }
                    }
                ]
            },
            {
                id: 'gk-1',
                title: 'Smartie GK',
                icon: 'Star',
                color: 'yellow',
                lessons: [
                    {
                        id: 'gk1-l1',
                        title: 'Which animal says Meow?',
                        level: 1,
                        type: 'quiz',
                        content: {
                            question: 'Which animal says Meow?',
                            answer: 'Cat 🐱',
                            options: ['Dog 🐶', 'Cat 🐱', 'Cow 🐮', 'Lion 🦁']
                        }
                    },
                    {
                        id: 'gk1-l2',
                        title: 'Color of the Sun',
                        level: 2,
                        type: 'quiz',
                        content: {
                            question: 'What color is the Sun?',
                            answer: 'Yellow 💛',
                            options: ['Red ❤️', 'Blue 💙', 'Yellow 💛', 'Green 💚']
                        }
                    },
                    {
                        id: 'gk1-l3',
                        title: 'King of Jungle',
                        level: 3,
                        type: 'quiz',
                        content: {
                            question: 'Who is the King of the Jungle?',
                            answer: 'Lion 🦁',
                            options: ['Elephant 🐘', 'Lion 🦁', 'Tiger 🐯', 'Monkey 🐒']
                        }
                    },
                    {
                        id: 'gk1-l4',
                        title: 'Our Planet',
                        level: 4,
                        type: 'quiz',
                        content: {
                            question: 'What is the name of our beautiful planet?',
                            answer: 'Earth 🌍',
                            options: ['Moon 🌙', 'Sun ☀️', 'Earth 🌍', 'Mars 🔴']
                        }
                    },
                    {
                        id: 'gk1-l5',
                        title: 'Days in a Week',
                        level: 5,
                        type: 'quiz',
                        content: {
                            question: 'How many days are there in a week?',
                            answer: '7',
                            options: ['5', '6', '7', '8']
                        }
                    }
                ]
            }
        ]
    },
    2: {
        subjects: [
            {
                id: 'math-2',
                title: 'Number Ninja',
                icon: 'Calculator',
                color: 'green',
                lessons: [
                    {
                        id: 'm2-l1',
                        title: 'Double Trouble',
                        level: 1,
                        type: 'math_basic',
                        content: {
                            equation: '10 + 10',
                            answer: 20,
                            options: [15, 20, 25, 30]
                        }
                    }
                ]
            }
        ]
    }
};
