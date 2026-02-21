export const gradesData = [
    {
        id: 1,
        name: "Grade 1",
        emoji: "🌱",
        color: "var(--kid-blue)",
        tagline: "Fun for 6–7 year olds",
        mascotPhrases: [
            "Wow, you're so smart! 🌟",
            "Keep going, superstar! ⭐",
            "You did it! I'm so proud of you! 🎉",
            "Oops! Let's try again, you've got this! 💪",
            "Amazing job! You're a Grade 1 champion! 🏆"
        ],
        subjects: [
            {
                id: "math-magic",
                name: "Math Magic",
                emoji: "🔢",
                color: "var(--kid-orange)",
                icon: "🧮",
                description: "Numbers are fun!",
                levels: [
                    {
                        id: 1,
                        name: "Count 1–10",
                        difficulty: "Easy",
                        lessons: [
                            { id: "m1l1-1", title: "Count the Apples!", type: "counting", content: { target: 3, items: "🍎", options: [2, 3, 4], instruction: "Tap each apple to count them. How many apples are there?" } },
                            { id: "m1l1-2", title: "How Many Stars?", type: "counting", content: { target: 5, items: "⭐", options: [4, 5, 6], instruction: "Tap each star to count them!" } },
                            { id: "m1l1-3", title: "Pop and Count!", type: "counting", content: { target: 7, items: "🎈", options: [6, 7, 8], instruction: "Tap each balloon to count them!" } },
                            { id: "m1l1-4", title: "Count the Baby Ducks!", type: "counting", content: { target: 9, items: "🐥", options: [8, 9, 10], instruction: "How many ducks are swimming? Tap each one!" } },
                            { id: "m1l1-5", title: "Count the Flowers in the Garden!", type: "counting", content: { target: 10, items: "🌸", options: [9, 10, 11], instruction: "Tap each flower to count!" } }
                        ]
                    },
                    {
                        id: 2,
                        name: "Count 11–20",
                        difficulty: "Easy-Medium",
                        lessons: [
                            { id: "m1l2-1", title: "Count the Candy!", type: "counting", content: { target: 12, items: "🍬", options: [10, 11, 12], instruction: "Tap each candy — count past 10!" } },
                            { id: "m1l2-2", title: "Butterflies in the Garden!", type: "counting", content: { target: 15, items: "🦋", options: [14, 15, 16], instruction: "How many butterflies do you see?" } },
                            { id: "m1l2-3", title: "Fish in the Ocean!", type: "counting", content: { target: 17, items: "🐠", options: [16, 17, 18], instruction: "Count all the fish swimming!" } },
                            { id: "m1l2-4", title: "Count the Dots!", type: "quiz", question: "Count the dots on the card. How many are there? [14 dots]", options: ["12", "14", "16", "18"], correct: 1 },
                            { id: "m1l2-5", title: "Match the Number!", type: "matching", content: { pairs: [{ left: '🍕 (11)', right: '11' }, { left: '🌟 (14)', right: '14' }, { left: '🐸 (18)', right: '18' }] } }
                        ]
                    },
                    {
                        id: 3,
                        name: "Basic Addition",
                        difficulty: "Medium",
                        lessons: [
                            { id: "m1l3-1", title: "Adding Apples!", type: "math_basic", content: { equation: "2 + 3", answer: 5, options: [4, 5, 6] } },
                            { id: "m1l3-2", title: "More Ducks!", type: "math_basic", content: { equation: "3 + 4", answer: 7, options: [6, 7, 8] } },
                            { id: "m1l3-3", title: "Jump on the Number Line!", type: "number_line", content: { start: 4, jump: 3, target: 7, instruction: "Start at 4. Jump 3 spaces forward. Where do you land?" } },
                            { id: "m1l3-4", title: "Stars Join Together!", type: "math_basic", content: { equation: "5 + 5", answer: 10, options: [9, 10, 11] } },
                            { id: "m1l3-5", title: "Addition Champion Quiz!", type: "quiz", question: "What is 4 + 3?", options: ["6", "7", "8"], correct: 1 }
                        ]
                    },
                    {
                        id: 4,
                        name: "Basic Subtraction",
                        difficulty: "Medium-Hard",
                        lessons: [
                            { id: "m1l4-1", title: "Cookies are Disappearing!", type: "math_basic", content: { equation: "5 - 2", answer: 3, options: [2, 3, 4] } },
                            { id: "m1l4-2", title: "Birds Flying Away!", type: "math_basic", content: { equation: "8 - 3", answer: 5, options: [4, 5, 6] } },
                            { id: "m1l4-3", title: "Pop the Balloons!", type: "math_basic", content: { equation: "9 - 4", answer: 5, options: [4, 5, 6] } },
                            { id: "m1l4-4", title: "Hop Backwards!", type: "number_line", content: { start: 10, jump: -3, target: 7, instruction: "Start at 10. Hop back 3 spaces. Where do you land?" } },
                            { id: "m1l4-5", title: "Subtraction Star Quiz!", type: "quiz", question: "What is 10 - 5?", options: ["4", "5", "6"], correct: 1 }
                        ]
                    },
                    {
                        id: 5,
                        name: "Compare Numbers",
                        difficulty: "Hard",
                        lessons: [
                            { id: "m1l5-1", title: "The Hungry Alligator!", type: "quiz", question: "Is 7 bigger than 4?", options: ["Yes (7 > 4)", "No (7 < 4)"], correct: 0 },
                            { id: "m1l5-2", title: "Equal Teams!", type: "quiz", question: "Are 🍎🍎🍎 and 🍎🍎🍎 the same?", options: ["Equal ✅", "Not Equal ❌"], correct: 0 },
                            { id: "m1l5-3", title: "Which Sign Goes Here?", type: "fill_blank", content: { sentence: "9 ___ 5", answer: ">", options: [">", "<", "="] } },
                            { id: "m1l5-4", title: "Biggest to Smallest!", type: "drag_order", content: { items: ["1", "4", "9", "7", "3"], correctOrder: ["9", "7", "4", "3", "1"] } },
                            { id: "m1l5-5", title: "Grade 1 Math Champion! 🏆", type: "quiz", question: "What is 6 + 4?", options: ["9", "10", "11"], correct: 1 }
                        ]
                    }
                ]
            },
            {
                id: "abc-world",
                name: "ABC World",
                emoji: "🔤",
                color: "var(--kid-green)",
                icon: "📖",
                description: "Letters are everywhere!",
                levels: [
                    {
                        id: 1,
                        name: "Uppercase A–M",
                        lessons: [
                            { id: "e1l1-1", title: "Meet Letter A 🍎", type: "trace_letter", letter: "A", instruction: "Trace the letter A with your finger!" },
                            { id: "e1l1-2", title: "B is for Bear, C is for Cat!", type: "matching", content: { pairs: [{ left: 'B', right: '🐻 Bear' }, { left: 'C', right: '🐱 Cat' }] } },
                            { id: "e1l1-3", title: "D, E, F Magic", type: "fill_blank", content: { sentence: "_og", answer: "D", options: ["D", "E", "F"] } },
                            { id: "e1l1-4", title: "G to J Animals", type: "quiz", question: "Which letter does 🦒 Giraffe start with?", options: ["G", "H", "I", "J"], correct: 0 },
                            { id: "e1l1-5", title: "K, L, M Review", type: "matching", content: { pairs: [{ left: 'K', right: '🦘' }, { left: 'L', right: '🦁' }, { left: 'M', right: '🐒' }] } }
                        ]
                    },
                    {
                        id: 2,
                        name: "Uppercase N–Z",
                        lessons: [
                            { id: "e1l2-1", title: "N, O, P Fun", type: "matching", content: { pairs: [{ left: 'N', right: '🌙' }, { left: 'O', right: '🦦' }, { left: 'P', right: '🍕' }] } },
                            { id: "e1l2-2", title: "Q, R, S Quest", type: "quiz", question: "Which letter is for 👸 Queen?", options: ["Q", "R", "S"], correct: 0 },
                            { id: "e1l2-3", title: "T, U, V Journey", type: "matching", content: { pairs: [{ left: 'T', right: '🐯' }, { left: 'U', right: '☂️' }, { left: 'V', right: '🎻' }] } },
                            { id: "e1l2-4", title: "W, X, Y, Z End", type: "matching", content: { pairs: [{ left: 'W', right: '🐳' }, { left: 'X', right: '🎸' }, { left: 'Y', right: '🪀' }, { left: 'Z', right: '🦓' }] } },
                            { id: "e1l2-5", title: "Full Alphabet Quiz", type: "quiz", question: "Which letter is for 🦓 Zebra?", options: ["Z", "Y", "X"], correct: 0 }
                        ]
                    },
                    {
                        id: 3,
                        name: "Lowercase a–m",
                        lessons: [
                            { id: "e1l3-1", title: "a, b, c Intro", type: "quiz", question: "Which is the lowercase of B?", options: ["b", "d", "p"], correct: 0 },
                            { id: "e1l3-2", title: "d, e, f Focus", type: "trace_letter", letter: "d", instruction: "Trace the lowercase letter d!" },
                            { id: "e1l3-3", title: "g, h, i, j Match", type: "matching", content: { pairs: [{ left: 'G', right: 'g' }, { left: 'H', right: 'h' }, { left: 'I', right: 'i' }, { left: 'J', right: 'j' }] } },
                            { id: "e1l3-4", title: "k, l, m Words", type: "fill_blank", content: { sentence: "_ion", answer: "l", options: ["k", "l", "m"] } },
                            { id: "e1l3-5", title: "Lowercase a–m Review", type: "matching", content: { pairs: [{ left: 'a', right: 'A' }, { left: 'b', right: 'B' }, { left: 'm', right: 'M' }] } }
                        ]
                    },
                    {
                        id: 4,
                        name: "Lowercase n–z",
                        lessons: [
                            { id: "e1l4-1", title: "n, o, p Intro", type: "matching", content: { pairs: [{ left: 'n', right: 'N' }, { left: 'o', right: 'O' }, { left: 'p', right: 'P' }] } },
                            { id: "e1l4-2", title: "p vs q", type: "quiz", question: "Which one is 'p'?", options: ["p", "q"], correct: 0 },
                            { id: "e1l4-3", title: "r, s, t, u Match", type: "matching", content: { pairs: [{ left: 'R', right: 'r' }, { left: 'S', right: 's' }, { left: 'T', right: 't' }, { left: 'U', right: 'u' }] } },
                            { id: "e1l4-4", title: "v, w, x, y, z", type: "trace_letter", letter: "z", instruction: "Trace lowercase z!" },
                            { id: "e1l4-5", title: "Full Lowercase Review", type: "quiz", question: "Which is the lowercase of W?", options: ["m", "w", "v"], correct: 1 }
                        ]
                    },
                    {
                        id: 5,
                        name: "Match Upper & Lower",
                        lessons: [
                            { id: "e1l5-1", title: "Pair the Letters (A–G)", type: "matching", content: { pairs: [{ left: 'A', right: 'a' }, { left: 'B', right: 'b' }, { left: 'C', right: 'c' }, { left: 'D', right: 'd' }] } },
                            { id: "e1l5-2", title: "Pair the Letters (H–N)", type: "matching", content: { pairs: [{ left: 'H', right: 'h' }, { left: 'I', right: 'i' }, { left: 'J', right: 'j' }, { left: 'N', right: 'n' }] } },
                            { id: "e1l5-3", title: "Pair the Letters (O–Z)", type: "matching", content: { pairs: [{ left: 'O', right: 'o' }, { left: 'P', right: 'p' }, { left: 'Z', right: 'z' }] } },
                            { id: "e1l5-4", title: "Speed Sort", type: "sort", content: { categories: ["UPPERCASE", "lowercase"], items: [{ name: 'A', cat: 'UPPERCASE' }, { name: 'b', cat: 'lowercase' }, { name: 'C', cat: 'UPPERCASE' }] } },
                            { id: "e1l5-5", title: "Grand Alphabet Quiz", type: "quiz", question: "Full Alphabet Master!", options: ["Ready!", "Go!", "Done!"], correct: 2 }
                        ]
                    }
                ]
            },
            {
                id: "my-world",
                name: "My World",
                emoji: "🌍",
                color: "var(--kid-purple)",
                description: "Discover the world around you!",
                levels: [
                    {
                        id: 1,
                        name: "My Body",
                        lessons: [
                            { id: "w1l1-1", title: "Head and Face", type: "diagram_label", content: { mainEmoji: "🧍", spots: [{ id: 1, x: '100px', y: '50px', correct: 'Eyes' }, { id: 2, x: '100px', y: '100px', correct: 'Nose' }], labels: ['Eyes', 'Nose', 'Hair', 'Mouth'] } },
                            { id: "w1l1-2", title: "My Hands and Fingers", type: "counting", content: { target: 10, items: "🖐️", options: [8, 9, 10], instruction: "How many fingers do you have in total?" } },
                            { id: "w1l1-3", title: "Body Parts Song Quiz", type: "quiz", question: "What is ABOVE your shoulders?", options: ["Head", "Feet", "Arms"], correct: 0 },
                            { id: "w1l1-4", title: "What Does Each Part Do?", type: "matching", content: { pairs: [{ left: 'Eyes', right: 'See 👁️' }, { left: 'Ears', right: 'Hear 👂' }, { left: 'Nose', right: 'Smell 👃' }] } },
                            { id: "w1l1-5", title: "Body Parts Quiz", type: "quiz", question: "What do you use to kick a ball?", options: ["Feet", "Hands", "Eyes"], correct: 0 }
                        ]
                    },
                    {
                        id: 2,
                        name: "Colors 🎨",
                        lessons: [
                            { id: "w1l2-1", title: "Primary Colors", type: "quiz", question: "What color is the sun? ☀️", options: ["Red", "Blue", "Yellow"], correct: 2 },
                            { id: "w1l2-2", title: "Secondary Colors", type: "quiz", question: "Red + Blue = ?", options: ["Green", "Orange", "Purple"], correct: 2 },
                            { id: "w1l2-3", title: "More Colors", type: "matching", content: { pairs: [{ left: 'Pink', right: '🩷' }, { left: 'Brown', right: '🟤' }, { left: 'Black', right: '⚫' }] } },
                            { id: "w1l2-4", title: "Colors in Nature", type: "quiz", question: "What color is the grass?", options: ["Blue", "Green", "Red"], correct: 1 },
                            { id: "w1l2-5", title: "Rainbow Order", type: "drag_order", content: { items: ["Red", "Yellow", "Green", "Blue"], correctOrder: ["Red", "Yellow", "Green", "Blue"] } }
                        ]
                    },
                    {
                        id: 3,
                        name: "Shapes 🔷",
                        lessons: [
                            { id: "w1l3-1", title: "Circle and Square", type: "quiz", question: "Which shape has NO corners?", options: ["Circle", "Square", "Triangle"], correct: 0 },
                            { id: "w1l3-2", title: "Triangle and Rectangle", type: "matching", content: { pairs: [{ left: 'Pizza Slice 🍕', right: 'Triangle' }, { left: 'Book 📚', right: 'Rectangle' }] } },
                            { id: "w1l3-3", title: "Star, Heart, Oval", type: "matching", content: { pairs: [{ left: '⭐', right: 'Star' }, { left: '❤️', right: 'Heart' }, { left: '🥚', right: 'Oval' }] } },
                            { id: "w1l3-4", title: "Shapes in the Real World", type: "quiz", question: "What shape is a clock? 🕐", options: ["Circle", "Square", "Triangle"], correct: 0 },
                            { id: "w1l3-5", title: "Shape Sort", type: "sort", content: { categories: ["3 sides", "4 sides", "Round"], items: [{ name: '△', cat: '3 sides' }, { name: '□', cat: '4 sides' }, { name: '○', cat: 'Round' }] } }
                        ]
                    },
                    {
                        id: 4,
                        name: "Animals and Sounds 🐾",
                        lessons: [
                            { id: "w1l4-1", title: "Farm Animals", type: "matching", content: { pairs: [{ left: 'Dog 🐶', right: 'Woof' }, { left: 'Cow 🐄', right: 'Moo' }] } },
                            { id: "w1l4-2", title: "Wild Animals", type: "quiz", question: "What sound does a Lion make? 🦁", options: ["Roar", "Quack", "Moo"], correct: 0 },
                            { id: "w1l4-3", title: "Animal Homes", type: "matching", content: { pairs: [{ left: 'Bird', right: 'Nest 🪺' }, { left: 'Bee', right: 'Hive 🍯' }] } },
                            { id: "w1l4-4", title: "Baby Animals", type: "matching", content: { pairs: [{ left: 'Dog 🐶', right: 'Puppy' }, { left: 'Cat 🐱', right: 'Kitten' }] } },
                            { id: "w1l4-5", title: "Animal Quiz Grand", type: "quiz", question: "A baby duck is called a...", options: ["Puppy", "Duckling", "Calf"], correct: 1 }
                        ]
                    },
                    {
                        id: 5,
                        name: "Days & Months 📅",
                        lessons: [
                            { id: "w1l5-1", title: "Days of the Week", type: "quiz", question: "How many days in a week?", options: ["5", "6", "7"], correct: 2 },
                            { id: "w1l5-2", title: "Weekdays vs Weekend", type: "sort", content: { categories: ["Weekday", "Weekend"], items: [{ name: 'Monday', cat: 'Weekday' }, { name: 'Saturday', cat: 'Weekend' }] } },
                            { id: "w1l5-3", title: "Months (Jan–Jun)", type: "quiz", question: "Which month comes FIRST?", options: ["January", "March", "June"], correct: 0 },
                            { id: "w1l5-4", title: "Months (Jul–Dec)", type: "quiz", question: "Which month is Christmas? 🎄", options: ["October", "November", "December"], correct: 2 },
                            { id: "w1l5-5", title: "Calendar Champion Quiz", type: "quiz", question: "How many months in a year?", options: ["10", "12", "14"], correct: 1 }
                        ]
                    }
                ]
            },
            {
                id: "good-me",
                name: "Good Me",
                emoji: "🌈",
                color: "var(--kid-pink)",
                isLifeSkills: true,
                description: "Be kind, be safe, be YOU!",
                levels: [
                    {
                        id: 1,
                        name: "Magic Words ✨",
                        lessons: [
                            { id: "gm1-1", title: "Please 🙏", type: "scenario_quiz", instruction: "You want a cookie. What do you say?", options: ["Give me!", "Can I please? 🙏", "I want it!"], correct: 1 },
                            { id: "gm1-2", title: "Thank You 😊", type: "scenario_quiz", instruction: "Teacher gives you a star! What do you say?", options: ["Nothing", "Thank you! 😊", "I want more"], correct: 1 },
                            { id: "gm1-3", title: "Sorry 😔", type: "scenario_quiz", instruction: "You bump into a friend. What do you do?", options: ["Run away", "Laugh", "I'm so sorry! 😔"], correct: 2 },
                            { id: "gm1-4", title: "Excuse Me 🙋", type: "scenario_quiz", instruction: "Need to pass a crowd?", options: ["Push", "Excuse me, please! 🙋", "Shout!"], correct: 1 },
                            { id: "gm1-5", title: "Magic Words in Action", type: "quiz", question: "Which is a MAGIC word?", options: ["Please", "Now", "Go"], correct: 0 }
                        ]
                    },
                    {
                        id: 2,
                        name: "Hello & Goodbye 👋",
                        lessons: [
                            { id: "gm2-1", title: "Greeting Teachers", type: "scenario_quiz", instruction: "Walk into class?", options: ["Good morning!", "Nothing", "Hii!"], correct: 0 },
                            { id: "gm2-2", title: "Greeting Family", type: "scenario_quiz", instruction: "Grandpa visits?", options: ["Wave far away", "Say Salaam/Hello Grandpa", "Keep playing"], correct: 1 },
                            { id: "gm2-3", title: "Saying Goodbye", type: "matching", content: { pairs: [{ left: 'Bedtime', right: 'Good night!' }, { left: 'Leaving school', right: 'See you tomorrow!' }] } },
                            { id: "gm2-4", title: "Phone Greetings", type: "scenario_quiz", instruction: "Phone rings?", options: ["Who is this?", "Hello, this is [Name]...", "What?"], correct: 1 },
                            { id: "gm2-5", title: "Greeting Role Play", type: "quiz", question: "Best way to say hello?", options: ["Smile and say Hi", "Shout", "Hide"], correct: 0 }
                        ]
                    },
                    {
                        id: 3,
                        name: "My Body is Mine 🛡️",
                        lessons: [
                            { id: "gm3-1", title: "Good vs Safe Touch", type: "story_read", content: { panels: [{ text: "Mia's grandma gives her a hug. Safe 😊", emoji: "👵" }, { text: "Stranger tries to touch Mia. Unsafe 😟", emoji: "👤" }], questions: [{ question: "Who can touch you safely?", options: ["Strangers", "Trusted Adults", "Anyone"], correct: 1 }] } },
                            { id: "gm3-2", title: "Trusted Adults", type: "sort", content: { categories: ["Trusted ✅", "Be Careful ⚠️"], items: [{ name: 'Mom', cat: 'Trusted ✅' }, { name: 'Stranger', cat: 'Be Careful ⚠️' }] } },
                            { id: "gm3-3", title: "Saying NO is OK!", type: "scenario_quiz", instruction: "Feel uncomfortable?", options: ["Do it", "Say No and move away! 💪", "Stay quiet"], correct: 1 },
                            { id: "gm3-4", title: "Tell a Trusted Adult", type: "quiz", question: "Bad secrets should be...", options: ["Kept forever", "Told to trusted adult", "Hidden"], correct: 1 },
                            { id: "gm3-5", title: "I Am Safe Quiz", type: "quiz", question: "Who owns your body?", options: ["Parents", "Me!", "Everyone"], correct: 1 }
                        ]
                    },
                    {
                        id: 4,
                        name: "Clean & Healthy Me 🧼",
                        lessons: [
                            { id: "gm4-1", title: "Brushing Teeth", type: "drag_order", content: { items: ["Get Brush", "Paste", "Brush", "Rinse"], correctOrder: ["Get Brush", "Paste", "Brush", "Rinse"] } },
                            { id: "gm4-2", title: "Washing Hands", type: "drag_order", content: { items: ["Wet", "Soap", "Scrub", "Dry"], correctOrder: ["Wet", "Soap", "Scrub", "Dry"] } },
                            { id: "gm4-3", title: "Daily Hygiene Routine", type: "sort", content: { categories: ["Morning 🌅", "Night 🌙"], items: [{ name: 'Breakfast', cat: 'Morning 🌅' }, { name: 'Pajamas', cat: 'Night 🌙' }] } },
                            { id: "gm4-4", title: "Healthy Habits Quiz", type: "spot_mistake", content: { totalMistakes: 1, items: [{ id: 1, emoji: '🍕', isMistake: false, x: '50px', y: '50px' }, { id: 2, emoji: '💩', isMistake: true, x: '200px', y: '150px' }] } },
                            { id: "gm4-5", title: "Health Hero Challenge", type: "quiz", question: "How often to bathe?", options: ["Weekly", "Daily", "Monthly"], correct: 1 }
                        ]
                    },
                    {
                        id: 5,
                        name: "Sharing & Taking Turns 🤝",
                        lessons: [
                            { id: "gm5-1", title: "Why We Share", type: "quiz", question: "Sharing makes how many happy?", options: ["1", "2", "None"], correct: 1 },
                            { id: "gm5-2", title: "Taking Turns", type: "scenario_quiz", instruction: "Both want computer?", options: ["Push", "Take turns! 🔄", "Cry"], correct: 1 },
                            { id: "gm5-3", title: "On the Playground", type: "scenario_quiz", instruction: "Friend waiting for swing?", options: ["Keep swinging", "Give them a turn ✅", "Run away"], correct: 1 },
                            { id: "gm5-4", title: "It's Hard to Share", type: "scenario_quiz", instruction: "Your favorite toy?", options: ["Never touch!", "Please be careful! 😊", "Hide it"], correct: 1 },
                            { id: "gm5-5", title: "Kindness Champion Quiz", type: "quiz", question: "Welcome new kids?", options: ["Ignore", "Welcome them! ✅", "Laugh"], correct: 1 }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Grade 2",
        emoji: "🌿",
        color: "var(--kid-green)",
        tagline: "Adventures for 7–8 year olds",
        mascotPhrases: [
            "You're getting smarter every second! 🧠✨",
            "Grade 2 explorer — keep adventuring! 🗺️",
            "Wow! You figured that out! 🎯",
            "Almost there! Give it one more try! 💪",
            "That's Grade 2 level thinking! 🌿🌟"
        ],
        subjects: [
            {
                id: "math-adventure",
                name: "Math Adventure",
                emoji: "🔢",
                color: "var(--kid-orange)",
                icon: "🧮",
                description: "Numbers are your superpower!",
                levels: [
                    {
                        id: 1,
                        name: "Addition Up to 20",
                        difficulty: "Easy",
                        lessons: [
                            { id: "m2l1-1", title: "Make a Teen Number!", type: "math_basic", content: { equation: "9 + 4", answer: 13, options: [12, 13, 14], instruction: "Count on from the bigger number! Start at 9... 10, 11, 12, 13! ✋" } },
                            { id: "m2l1-2", title: "Reach 15!", type: "number_line", content: { start: 7, jump: 8, target: 15, instruction: "7 + 8 = ? Jump on the number line! 🦘" } },
                            {
                                id: "m2l1-3", title: "Doubles are Easy!", type: "math_basic", multi: true, questions: [
                                    { equation: "6 + 6", answer: 12, options: [11, 12, 13], instruction: "Doubles are like twins — same number, twice the fun! 👯" },
                                    { equation: "7 + 7", answer: 14, options: [13, 14, 15] },
                                    { equation: "8 + 8", answer: 16, options: [15, 16, 17] }
                                ]
                            },
                            {
                                id: "m2l1-4", title: "Race to 20!", type: "fill_blank", questions: [
                                    { sentence: "15 + ___ = 20", answer: "5", options: ["3", "5", "6", "8", "11"] },
                                    { sentence: "12 + ___ = 20", answer: "8", options: ["3", "5", "6", "8", "11"] },
                                    { sentence: "___ + 9 = 20", answer: "11", options: ["3", "5", "6", "8", "11"] },
                                    { sentence: "17 + ___ = 20", answer: "3", options: ["3", "5", "6", "8", "11"] },
                                    { sentence: "___ + 14 = 20", answer: "6", options: ["3", "5", "6", "8", "11"] }
                                ]
                            },
                            {
                                id: "m2l1-5", title: "Addition Adventure Champion! 🏁", type: "quiz", questions: [
                                    { question: "8 + 7 = ?", options: ["14", "15", "16"], correct: 1 },
                                    { question: "9 + 9 = ?", options: ["17", "18", "19"], correct: 1 },
                                    { question: "6 + 8 = ?", options: ["13", "14", "15"], correct: 1 },
                                    { question: "11 + 5 = ?", options: ["15", "16", "17"], correct: 1 },
                                    { question: "7 + 9 = ?", options: ["15", "16", "17"], correct: 1 }
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Subtraction Up to 20",
                        difficulty: "Medium",
                        lessons: [
                            { id: "m2l2-1", title: "Count Back to Subtract!", type: "number_line", content: { start: 15, jump: -6, target: 9, instruction: "15 - 6 = ? Hop the rabbit backwards! 🐇" } },
                            {
                                id: "m2l2-2", title: "Teens Takeaway!", type: "math_basic", multi: true, questions: [
                                    { equation: "13 - 5", answer: 8, options: [7, 8, 9], instruction: "Subtraction = hopping BACKWARDS! 🐇" },
                                    { equation: "16 - 7", answer: 9, options: [8, 9, 10] },
                                    { equation: "14 - 6", answer: 8, options: [7, 8, 9] }
                                ]
                            },
                            {
                                id: "m2l2-3", title: "Related Addition Facts", type: "fill_blank", instruction: "Addition and subtraction are best friends! 👫", questions: [
                                    { sentence: "15 - 8 = ___", answer: "7", options: ["7", "8", "15"] },
                                    { sentence: "15 - 7 = ___", answer: "8", options: ["7", "8", "15"] },
                                    { sentence: "___ + 8 = 15", answer: "7", options: ["7", "8", "15"] },
                                    { sentence: "7 + ___ = 15", answer: "8", options: ["7", "8", "15"] }
                                ]
                            },
                            {
                                id: "m2l2-4", title: "Maths in Real Life!", type: "quiz", questions: [
                                    { question: "Sara had 18 sweets. She gave 9 to friends. How many left?", options: ["8", "9", "10"], correct: 1 },
                                    { question: "There were 20 birds on a tree. 7 flew away. How many stayed?", options: ["12", "13", "14"], correct: 1 },
                                    { question: "A box had 16 crayons. 8 broke. How many are good?", options: ["7", "8", "9"], correct: 1 },
                                    { question: "Rohan scored 20 points. He lost 11. What's his score now?", options: ["8", "9", "10"], correct: 1 }
                                ]
                            },
                            {
                                id: "m2l2-5", title: "Add AND Subtract Champion! ➕➖", type: "quiz", questions: [
                                    { question: "12 + 6 = ?", options: ["17", "18", "19"], correct: 1 },
                                    { question: "20 - 8 = ?", options: ["11", "12", "13"], correct: 1 },
                                    { question: "9 + 7 = ?", options: ["15", "16", "17"], correct: 1 },
                                    { question: "17 - 9 = ?", options: ["7", "8", "9"], correct: 2 },
                                    { question: "14 + 5 = ?", options: ["18", "19", "20"], correct: 1 }
                                ]
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Skip Counting",
                        difficulty: "Medium",
                        lessons: [
                            {
                                id: "m2l3-1", title: "Hop by 2s!", type: "fill_blank", instruction: "Skip counting by 2s is the beginning of multiplication! 🌟", questions: [
                                    { sentence: "2, 4, ___, 8", answer: "6", options: ["5", "6", "10"] },
                                    { sentence: "10, 12, ___, 16", answer: "14", options: ["13", "14", "15"] },
                                    { sentence: "16, 18, ___, 22", answer: "20", options: ["19", "20", "21"] }
                                ]
                            },
                            {
                                id: "m2l3-2", title: "High Five Counting!", type: "fill_blank", instruction: "Counting by 5s is super fast! ✋", questions: [
                                    { sentence: "5, 10, ___, 20", answer: "15", options: ["12", "15", "25"] },
                                    { sentence: "25, 30, ___, 40", answer: "35", options: ["32", "35", "45"] },
                                    { sentence: "40, 45, ___, 55", answer: "50", options: ["48", "50", "52"] }
                                ]
                            },
                            {
                                id: "m2l3-3", title: "Giant Leaps of 10!", type: "fill_blank", instruction: "10 jumps to 100! 🦘", questions: [
                                    { sentence: "10, 20, ___, 40", answer: "30", options: ["25", "30", "35"] },
                                    { sentence: "50, 60, ___, 80", answer: "70", options: ["65", "70", "75"] },
                                    { sentence: "80, 90, ___, 110", answer: "100", options: ["95", "100", "105"] }
                                ]
                            },
                            {
                                id: "m2l3-4", title: "What's Missing?", type: "fill_blank", questions: [
                                    { sentence: "8, 10, ___, 14", answer: "12", options: ["11", "12", "16"] },
                                    { sentence: "25, 30, ___, 40", answer: "35", options: ["32", "35", "45"] },
                                    { sentence: "50, 60, ___, 80", answer: "70", options: ["65", "70", "75"] }
                                ]
                            },
                            {
                                id: "m2l3-5", title: "Skip Count Master! 🏆", type: "quiz", questions: [
                                    { question: "Count by 2s: 6, 8, ___, 12", options: ["9", "10", "11"], correct: 1 },
                                    { question: "Count by 5s: 20, 25, ___, 35", options: ["28", "30", "32"], correct: 1 },
                                    { question: "Count by 10/10s: 40, 50, ___, 70", options: ["55", "60", "65"], correct: 1 },
                                    { question: "4 hands of fingers = ?", options: ["15", "20", "25"], correct: 1 }
                                ]
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: "Multiplication Intro",
                        difficulty: "Medium-Hard",
                        lessons: [
                            {
                                id: "m2l4-1", title: "What is Multiplication?", type: "quiz", questions: [
                                    { question: "3 groups of 4 = ?", options: ["10", "12", "14"], correct: 1 },
                                    { question: "2 bags with 5 apples each = ?", options: ["8", "10", "12"], correct: 1 }
                                ]
                            },
                            {
                                id: "m2l4-2", title: "The 2 Times Table", type: "math_basic", multi: true, questions: [
                                    { equation: "2 * 4", answer: 8, options: [6, 8, 10], instruction: "2 times = just add the number to itself!" },
                                    { equation: "2 * 6", answer: 12, options: [10, 12, 14] },
                                    { equation: "2 * 9", answer: 18, options: [16, 18, 20] }
                                ]
                            },
                            {
                                id: "m2l4-3", title: "The 5 Times Table", type: "math_basic", multi: true, questions: [
                                    { equation: "5 * 3", answer: 15, options: [10, 15, 20], instruction: "All 5× answers end in 0 or 5! 🌟" },
                                    { equation: "5 * 5", answer: 25, options: [20, 25, 30] },
                                    { equation: "5 * 8", answer: 40, options: [35, 40, 45] }
                                ]
                            },
                            {
                                id: "m2l4-4", title: "Multiplication Arrays!", type: "quiz", questions: [
                                    { question: "3 rows and 4 columns = ?", options: ["11", "12", "13"], correct: 1 },
                                    { question: "2 rows and 5 columns = ?", options: ["8", "10", "12"], correct: 1 }
                                ]
                            },
                            {
                                id: "m2l4-5", title: "Multiplication Maestro! 🎼", type: "quiz", questions: [
                                    { question: "2 * 7 = ?", options: ["12", "14", "16"], correct: 1 },
                                    { question: "5 * 4 = ?", options: ["18", "20", "22"], correct: 1 },
                                    { question: "2 * 9 = ?", options: ["16", "18", "20"], correct: 1 },
                                    { question: "5 * 7 = ?", options: ["30", "35", "40"], correct: 1 },
                                    { question: "2 * 6 = ?", options: ["10", "12", "14"], correct: 1 }
                                ]
                            }
                        ]
                    },
                    {
                        id: 5,
                        name: "Even and Odd",
                        difficulty: "Hard",
                        lessons: [
                            {
                                id: "m2l5-1", title: "Pairs Club!", type: "quiz", questions: [
                                    { question: "Is 6 even or odd?", options: ["Even (Pairs) ✅", "Odd (Leftover) ❌"], correct: 0 },
                                    { question: "Is 7 even or odd?", options: ["Even", "Odd"], correct: 1 }
                                ]
                            },
                            { id: "m2l5-2", title: "Even Number Pattern", type: "quiz", question: "Which one is EVEN?", options: ["13", "16", "23"], correct: 1 },
                            { id: "m2l5-3", title: "The Lonely One Club!", type: "sort", content: { categories: ["EVEN 👯", "ODD 🙋"], items: [{ name: '14', cat: 'EVEN 👯' }, { name: '7', cat: 'ODD 🙋' }, { name: '22', cat: 'EVEN 👯' }, { name: '13', cat: 'ODD 🙋' }, { name: '30', cat: 'EVEN 👯' }, { name: '9', cat: 'ODD 🙋' }] } },
                            {
                                id: "m2l5-4", title: "Even and Odd Everywhere!", type: "quiz", questions: [
                                    { question: "A spider has 8 legs. Even or odd?", options: ["Even", "Odd"], correct: 0 },
                                    { question: "A tricycle has 3 wheels. Even or odd?", options: ["Even", "Odd"], correct: 1 },
                                    { question: "An octopus has 8 arms. Even or odd?", options: ["Even", "Odd"], correct: 0 }
                                ]
                            },
                            {
                                id: "m2l5-5", title: "Even & Odd MASTER! 🏆", type: "quiz", questions: [
                                    { question: "Which one is EVEN?", options: ["3", "7", "12", "15"], correct: 2 },
                                    { question: "17 + 1 = 18. Is 18 even?", options: ["Yes", "No"], correct: 0 },
                                    { question: "Is 0 an even number?", options: ["True", "False"], correct: 0 }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "reading-quest",
                name: "Reading Quest",
                emoji: "📖",
                color: "var(--kid-blue)",
                icon: "📖",
                description: "Words open every door!",
                levels: [
                    {
                        id: 1,
                        name: "CVC Words",
                        lessons: [
                            {
                                id: "r2l1-1", title: "The 'A' Family!", type: "fill_blank", instruction: "Short 'a' says 'aaa' like in apple! 🍎", questions: [
                                    { sentence: "c_t", answer: "a", options: ["a", "e", "i"] },
                                    { sentence: "b_t", answer: "a", options: ["a", "e", "i"] },
                                    { sentence: "p_n", answer: "a", options: ["a", "e", "i"] }
                                ]
                            },
                            { id: "r2l1-2", title: "Short 'i' and 'o' Words", type: "matching", content: { pairs: [{ left: '🐷', right: 'pig' }, { left: '🌫️', right: 'fog' }, { left: '🪣', right: 'mop' }, { left: '🔝', right: 'top' }] } },
                            {
                                id: "r2l1-3", title: "Short 'e' and 'u' Words", type: "fill_blank", instruction: "5 vowels: A E I O U — they live in the MIDDLE! 🎯", questions: [
                                    { sentence: "b_d", answer: "e", options: ["e", "u", "i"] },
                                    { sentence: "s_n", answer: "u", options: ["e", "u", "i"] },
                                    { sentence: "b_g", answer: "u", options: ["e", "u", "i"] },
                                    { sentence: "h_n", answer: "e", options: ["e", "u", "i"] }
                                ]
                            },
                            {
                                id: "r2l1-4", title: "Word Detective! 🔍", type: "matching", content: {
                                    pairs: [
                                        { left: 'cat', right: '🐱' }, { left: 'dog', right: '🐶' }, { left: 'pig', right: '🐷' },
                                        { left: 'hen', right: '🐔' }, { left: 'bug', right: '🐛' }, { left: 'sun', right: '☀️' },
                                        { left: 'hat', right: '🎩' }, { left: 'bed', right: '🛏️' }, { left: 'cup', right: '☕' }, { left: 'mop', right: '🪣' }
                                    ]
                                }
                            },
                            {
                                id: "r2l1-5", title: "CVC Word Builder", type: "fill_blank", questions: [
                                    { sentence: "s_n", answer: "u", options: ["a", "u", "o"] },
                                    { sentence: "k_ey", answer: "e", options: ["e", "a", "u"] }
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Blends & 4-Letters",
                        lessons: [
                            {
                                id: "r2l2-1", title: "Beginning Blends", type: "fill_blank", instruction: "Blends are two letters that work as a TEAM! 🤝", questions: [
                                    { sentence: "___ag", answer: "fl", options: ["fl", "sl", "cl"] },
                                    { sentence: "___ip", answer: "sl", options: ["fl", "sl", "cl"] },
                                    { sentence: "___am", answer: "cl", options: ["fl", "sl", "cl"] }
                                ]
                            },
                            {
                                id: "r2l2-2", title: "Animal Blends", type: "matching", content: {
                                    pairs: [
                                        { left: '🐸', right: 'frog' }, { left: '🥁', right: 'drum' }, { left: '💧', right: 'drip' }, { left: '😁', right: 'grin' }
                                    ]
                                }
                            },
                            {
                                id: "r2l2-3", title: "Ending Blends", type: "fill_blank", questions: [
                                    { sentence: "ha___", answer: "nd", options: ["nd", "st", "mp", "nk"] },
                                    { sentence: "be___", answer: "st", options: ["nd", "st", "mp", "nk"] },
                                    { sentence: "ju___", answer: "mp", options: ["nd", "st", "mp", "nk"] },
                                    { sentence: "pi___", answer: "nk", options: ["nd", "st", "mp", "nk"] }
                                ]
                            },
                            {
                                id: "r2l2-4", title: "4-Letter Word Reading", type: "quiz", questions: [
                                    { question: "Which word matches 🐸?", options: ["frog", "drum", "jump"], correct: 0 },
                                    { question: "Which word matches 🥁?", options: ["drum", "drip", "drop"], correct: 0 },
                                    { question: "Which word matches 🦘?", options: ["frog", "drum", "jump"], correct: 2 }
                                ]
                            },
                            {
                                id: "r2l2-5",
                                title: "Brad the Brave Frog! 🐸",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "Brad the frog lived on a flat rock. 🐸", emoji: "🐸" },
                                        { text: "He loved to drum and clap his hands. 🥁👏", emoji: "🥁" },
                                        { text: "One day, Brad slipped and dropped his drum! 😮", emoji: "😮" },
                                        { text: "He grabbed a branch and pulled himself up. 💪", emoji: "💪" },
                                        { text: "Brad grinned. He was the best frog! 😁", emoji: "😁" }
                                    ],
                                    questions: [
                                        { question: "Where did Brad live?", options: ["Flat rock", "Tree", "Water"], correct: 0 },
                                        { question: "What did Brad drop?", options: ["Drum", "Stick", "Apple"], correct: 0 },
                                        { question: "How did Brad feel at the end?", options: ["Sad", "Grinned (Happy)", "Angry"], correct: 1 }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Simple Sentences",
                        lessons: [
                            {
                                id: "r2l3-1", title: "Who and Does!", type: "fill_blank", instruction: "A sentence always tells WHO does WHAT! 💡", questions: [
                                    { sentence: "The dog ___.", answer: "barks", options: ["barks", "flies", "swims"] },
                                    { sentence: "The bird ___.", answer: "flies", options: ["barks", "flies", "swims"] },
                                    { sentence: "The fish ___.", answer: "swims", options: ["barks", "flies", "swims"] }
                                ]
                            },
                            {
                                id: "r2l3-2", title: "Who is in the Sentence?", type: "fill_blank", questions: [
                                    { sentence: "The ___ is red.", answer: "apple", options: ["apple", "sky", "grass"] },
                                    { sentence: "A ___ can swim.", answer: "fish", options: ["fish", "cat", "bird"] },
                                    { sentence: "The ___ is very tall.", answer: "tree", options: ["tree", "ant", "flower"] }
                                ]
                            },
                            { id: "r2l3-3", title: "Fix the Sentence!", type: "drag_order", content: { items: ["runs", "dog", "The", "fast"], correctOrder: ["The", "dog", "runs", "fast"] }, instruction: "A sentence starts with a CAPITAL and ends with a FULL STOP! 🔠" },
                            {
                                id: "r2l3-4", title: "Make It Interesting!", type: "fill_blank", instruction: "Describing words (adjectives) paint pictures! 🎨", questions: [
                                    { sentence: "The ___ dog runs fast.", answer: "big", options: ["big", "small", "fluffy"] },
                                    { sentence: "I ate a ___ apple.", answer: "red", options: ["red", "juicy", "green"] }
                                ]
                            },
                            {
                                id: "r2l3-5", title: "Sentence Superstar! 🌟", type: "quiz", questions: [
                                    { question: "Which is a complete sentence?", options: ["The cat.", "The cat runs.", "Runs fast."], correct: 1 },
                                    { question: "Does this make sense: 'Apple the red is.'", options: ["Yes", "No"], correct: 1 }
                                ]
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: "Rhyming Words",
                        lessons: [
                            {
                                id: "r2l4-1", title: "Words That Sound Alike!", type: "matching", content: {
                                    pairs: [
                                        { left: 'cat 🐱', right: 'bat 🦇' }, { left: 'moon 🌙', right: 'spoon 🥄' },
                                        { left: 'tree 🌳', right: 'bee 🐝' }, { left: 'rain 🌧️', right: 'train 🚂' }, { left: 'star ⭐', right: 'car 🚗' }
                                    ]
                                }, instruction: "Rhyming words are like word TWINS! 👯"
                            },
                            {
                                id: "r2l4-2", title: "Rhyme Families!", type: "sort", content: {
                                    categories: ["_ight", "_ake"], items: [
                                        { name: 'night', cat: '_ight' }, { name: 'cake', cat: '_ake' }, { name: 'light', cat: '_ight' },
                                        { name: 'lake', cat: '_ake' }, { name: 'bright', cat: '_ight' }, { name: 'bake', cat: '_ake' }
                                    ]
                                }
                            },
                            {
                                id: "r2l4-3", title: "Rhyme or No Rhyme?", type: "quiz", questions: [
                                    { question: "Do 'cat' and 'hat' rhyme?", options: ["Yes", "No"], correct: 0 },
                                    { question: "Do 'dog' and 'cat' rhyme?", options: ["Yes", "No"], correct: 1 },
                                    { question: "Do 'sun' and 'run' rhyme?", options: ["Yes", "No"], correct: 0 }
                                ]
                            },
                            {
                                id: "r2l4-4", title: "Rhyme Detective! 🔍", type: "quiz", questions: [
                                    { question: "What rhymes with 'dog'?", options: ["log", "dig", "cat"], correct: 0 },
                                    { question: "What rhymes with 'make'?", options: ["lake", "book", "sun"], correct: 0 },
                                    { question: "What rhymes with 'said'?", options: ["bed", "red", "fed"], correct: 0 }
                                ]
                            },
                            {
                                id: "r2l4-5", title: "Rhyming Poem", type: "fill_blank", questions: [
                                    { sentence: "I went to the park one sunny ___", answer: "day", options: ["day", "way", "play"] },
                                    { sentence: "And met a little bird along the ___", answer: "way", options: ["day", "way", "play"] }
                                ]
                            }
                        ]
                    },
                    {
                        id: 5,
                        name: "Story Comprehension",
                        lessons: [
                            {
                                id: "r2l5-1",
                                title: "The Lost Kite",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "Mia and Leo flew a red kite in the park. 🪁", emoji: "🪁" },
                                        { text: "Suddenly the wind blew hard and the kite flew into a big tree! 🌳💨", emoji: "🌳" },
                                        { text: "Mia was sad. But Leo had an idea! 💡", emoji: "💡" },
                                        { text: "Leo found a long stick and carefully knocked the kite down. 🥢", emoji: "🥢" },
                                        { text: "Mia hugged Leo. 'You're the best brother!' she said. 🤗" }
                                    ],
                                    questions: [
                                        { question: "Who flew the kite?", options: ["Mia and Leo", "Mom", "Dad"], correct: 0 },
                                        { question: "What happened to the kite?", options: ["Lost", "Stuck in tree", "Broke"], correct: 1 },
                                        { question: "How did Leo get it down?", options: ["Ladder", "Stick", "Jumped"], correct: 1 },
                                        { question: "How did Mia feel when stuck?", options: ["Happy", "Sad", "Angry"], correct: 1 }
                                    ]
                                }
                            },
                            {
                                id: "r2l5-2",
                                title: "The Brave Snail",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "Sam the snail wanted to climb the big mountain. 🐌⛰️", emoji: "🐌" },
                                        { text: "All the other animals laughed. 'You are too slow!' they said. 😂", emoji: "😂" },
                                        { text: "Sam did not give up. Slowly, slowly, he climbed. 🐌💪", emoji: "🐌" },
                                        { text: "Three days later, Sam reached the top! 🏔️🎉", emoji: "🏔️" },
                                        { text: "The animals cheered. They learned a lesson! 🌟" }
                                    ],
                                    questions: [
                                        { question: "What did Sam do?", options: ["Climbed mountain", "Slept", "Ran"], correct: 0 },
                                        { question: "Did Sam give up?", options: ["Yes", "No"], correct: 1 },
                                        { question: "The animals learned...", options: ["To laugh", "Never give up", "To run"], correct: 1 }
                                    ]
                                }
                            },
                            {
                                id: "r2l5-3",
                                title: "Grandma's Garden",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "Priya helped Grandma in the garden. 🌻👵", emoji: "🌻" },
                                        { text: "They planted seeds and watered plants. 🌱💧", emoji: "🌱" },
                                        { text: "One day, Priya saw a tiny caterpillar on a leaf. 🐛", emoji: "🐛" },
                                        { text: "Weeks later, a beautiful butterfly came! 🦋", emoji: "🦋" },
                                        { text: "Priya watched a miracle! ✨" }
                                    ],
                                    questions: [
                                        { question: "What did Priya find?", options: ["Caterpillar", "Dog", "Ball"], correct: 0 },
                                        { question: "What did it become?", options: ["Bird", "Butterfly", "Tree"], correct: 1 },
                                        { question: "When did she help?", options: ["Saturday", "Monday", "Friday"], correct: 0 }
                                    ]
                                }
                            },
                            {
                                id: "r2l5-4",
                                title: "The Magic Library",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "Omar found a tiny door in the library. 📚🚪", emoji: "📚" },
                                        { text: "Inside were glowing books! ✨📖", emoji: "✨" },
                                        { text: "Each book took him on an adventure! 🚀", emoji: "🚀" },
                                        { text: "Every book is a door! 🗝️" }
                                    ],
                                    questions: [
                                        { question: "Where was the door?", options: ["Library", "Garden", "Kitchen"], correct: 0 },
                                        { question: "The books were...", options: ["Old", "Glowing", "Heavy"], correct: 1 }
                                    ]
                                }
                            },
                            {
                                id: "r2l5-5",
                                title: "Reading Champion! 📚🏆",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "Aisha was ready for the big race. 🏃‍♀️", emoji: "🏃‍♀️" },
                                        { text: "She was scared, but she tried her best! 💪", emoji: "💪" },
                                        { text: "She finished the race and felt great! 🥇", emoji: "🥇" }
                                    ],
                                    questions: [
                                        { question: "How did Aisha feel?", options: ["Scared but brave", "Angry", "Bored"], correct: 0 },
                                        { question: "Did she finish?", options: ["Yes", "No"], correct: 0 }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: "nature-explorer",
                name: "Nature Explorer",
                emoji: "🌿",
                color: "var(--kid-green)",
                icon: "🌍",
                description: "The world is your classroom!",
                levels: [
                    {
                        id: 1,
                        name: "Plant Life Cycles",
                        lessons: [
                            { id: "n2l1-1", title: "From Seed to Flower", type: "drag_order", content: { items: ["Seed 🌱", "Sprout 🌿", "Bud 🌷", "Flower 🌸"], correctOrder: ["Seed 🌱", "Sprout 🌿", "Bud 🌷", "Flower 🌸"] }, instruction: "Everything starts small! Watch it grow! ↗️" },
                            {
                                id: "n2l1-2", title: "What Do Plants Need?", type: "quiz", questions: [
                                    { question: "Plants need sunlight and ___.", options: ["Juice", "Water", "Milk"], correct: 1 },
                                    { question: "Where do plants get food?", options: ["Leaves make it!", "Grocery store", "Birds"], correct: 0 },
                                    { question: "What part of the plant is underground?", options: ["Roots", "Leaves", "Flowers"], correct: 0 }
                                ]
                            },
                            { id: "n2l1-3", title: "The Bee's Job!", type: "quiz", question: "Bees move ___ from flower to flower.", options: ["Honey", "Pollen", "Water"], correct: 1, instruction: "Pollen helps flowers make seeds! 🐝" },
                            {
                                id: "n2l1-4", title: "Plant Parts Match", type: "matching", content: {
                                    pairs: [
                                        { left: 'Roots', right: 'Drink water 💧' }, { left: 'Stem', right: 'Stand tall 🦒' },
                                        { left: 'Leaves', right: 'Catch sun ☀️' }, { left: 'Flower', right: 'Make seeds 🌱' }
                                    ]
                                }
                            },
                            {
                                id: "n2l1-5", title: "Botanist Brain! 🧠", type: "quiz", questions: [
                                    { question: "Can plants grow without light?", options: ["Yes", "No", "Only some"], correct: 1 },
                                    { question: "Which one is a SEED?", options: ["Bean", "Leaf", "Stick"], correct: 0 }
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Animal Habitats",
                        lessons: [
                            {
                                id: "n2l2-1", title: "Home Sweet Home", type: "matching", content: {
                                    pairs: [
                                        { left: '🦁 Lion', right: 'Savannah 🌾' }, { left: '🐧 Penguin', right: 'Antarctica ❄️' },
                                        { left: '🐒 Monkey', right: 'Jungle 🌴' }, { left: '🐫 Camel', right: 'Desert 🏜️' }
                                    ]
                                }, instruction: "Every animal has a special place to live! 🏠"
                            },
                            {
                                id: "n2l2-2", title: "Ocean Explorers", type: "quiz", questions: [
                                    { question: "Which animal lives in the ocean?", options: ["Whale", "Elephant", "Tiger"], correct: 0 },
                                    { question: "How do fish breathe?", options: ["Lungs", "Gills", "Skin"], correct: 1 }
                                ]
                            },
                            {
                                id: "n2l2-3", title: "Desert Adventurers", type: "quiz", instruction: "Deserts are dry, but full of life! 🌵", questions: [
                                    { question: "Camels store ___ in their humps.", options: ["Water", "Fat (for energy)", "Sand"], correct: 1 },
                                    { question: "Which plant lives in the desert?", options: ["Cactus", "Maple Tree", "Seaweed"], correct: 0 }
                                ]
                            },
                            {
                                id: "n2l2-4", title: "Arctic Life", type: "quiz", questions: [
                                    { question: "Polar bears have thick ___ to stay warm.", options: ["Fur", "Clothes", "Feathers"], correct: 0 },
                                    { question: "Do penguins live in the Arctic (North)?", options: ["No, they live in the South!", "Yes"], correct: 0 }
                                ]
                            },
                            {
                                id: "n2l2-5", title: "Habitat Hero! 🎖️", type: "sort", content: {
                                    categories: ["HOT ☀️", "COLD ❄️"], items: [
                                        { name: 'Desert', cat: 'HOT ☀️' }, { name: 'Antarctica', cat: 'COLD ❄️' },
                                        { name: 'Savannah', cat: 'HOT ☀️' }, { name: 'Arctic', cat: 'COLD ❄️' }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Weather & Seasons",
                        lessons: [
                            { id: "n2l3-1", title: "Season Cycle", type: "drag_order", content: { items: ["Spring 🌸", "Summer ☀️", "Autumn 🍂", "Winter ❄️"], correctOrder: ["Spring 🌸", "Summer ☀️", "Autumn 🍂", "Winter ❄️"] }, instruction: "The Earth has a rhythm! 🌏" },
                            {
                                id: "n2l3-2", title: "What is a Cloud?", type: "quiz", questions: [
                                    { question: "Clouds are made of ___.", options: ["Cotton", "Water drops", "Smoke"], correct: 1 },
                                    { question: "Which cloud means a storm is coming?", options: ["White fluffy", "Dark grey puffy", "Thin wispy"], correct: 1 }
                                ]
                            },
                            {
                                id: "n2l3-3", title: "The Water Cycle", type: "quiz", instruction: "Water never leaves Earth, it just travels! ♻️", questions: [
                                    { question: "Water turning into gas is...", options: ["Evaporation", "Freezing", "Drinking"], correct: 0 },
                                    { question: "Rain/Snow is called...", options: ["Precipitation", "Swimming", "Wind"], correct: 0 }
                                ]
                            },
                            {
                                id: "n2l3-4", title: "Season Match!", type: "matching", content: {
                                    pairs: [
                                        { left: '🌸 Spring', right: 'Baby animals' }, { left: '☀️ Summer', right: 'Long hot days' },
                                        { left: '🍂 Autumn', right: 'Falling leaves' }, { left: '❄️ Winter', right: 'Snow & hibernation' }
                                    ]
                                }
                            },
                            {
                                id: "n2l3-5", title: "Weather Wizard! 🧙‍♂️", type: "quiz", questions: [
                                    { question: "What is wind?", options: ["Moving air", "Bird breath", "Cloud pushing"], correct: 0 },
                                    { question: "Can it snow in the desert?", options: ["Rarely, but yes!", "Never", "Every day"], correct: 0 }
                                ]
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: "Solar System",
                        lessons: [
                            {
                                id: "n2l4-1", title: "Our Star: The Sun!", type: "quiz", questions: [
                                    { question: "Is the sun a planet or a star?", options: ["Planet", "Star"], correct: 1 },
                                    { question: "The Earth goes around the Sun.", options: ["True", "False"], correct: 0 }
                                ]
                            },
                            {
                                id: "n2l4-2", title: "Planet Neighborhood", type: "matching", content: {
                                    pairs: [
                                        { left: 'Earth 🌍', right: 'Our home' }, { left: 'Mars 🔴', right: 'The red planet' },
                                        { left: 'Saturn 🪐', right: 'The ringed planet' }, { left: 'Jupiter 🟠', right: 'The giant planet' }
                                    ]
                                }, instruction: "There are 8 planets in our family! 👪"
                            },
                            {
                                id: "n2l4-3", title: "Moon Phases", type: "quiz", questions: [
                                    { question: "Does the moon have its own light?", options: ["Yes", "No, it reflects the sun"], correct: 1 },
                                    { question: "A full moon looks like a ___.", options: ["Circle", "Crescent", "Star"], correct: 0 }
                                ]
                            },
                            {
                                id: "n2l4-4", title: "Day and Night", type: "quiz", instruction: "Earth spins like a giant top! 🎡", questions: [
                                    { question: "Why do we have day?", options: ["Earth faces Sun", "Sun turns off", "Earth sleeps"], correct: 0 },
                                    { question: "How long is one full spin?", options: ["12 hours", "24 hours", "1 week"], correct: 1 }
                                ]
                            },
                            {
                                id: "n2l4-5", title: "Space Explorer! 🚀", type: "quiz", questions: [
                                    { question: "Which planet is closest to the Sun?", options: ["Mercury", "Earth", "Mars"], correct: 0 },
                                    { question: "Is there gravity on the Moon?", options: ["Very little", "None", "Same as Earth"], correct: 0 }
                                ]
                            }
                        ]
                    },
                    {
                        id: 5,
                        name: "Recycling & Earth",
                        lessons: [
                            {
                                id: "n2l5-1", title: "The 3 R's!", type: "matching", content: {
                                    pairs: [
                                        { left: 'Reduce', right: 'Use less' }, { left: 'Reuse', right: 'Use again' }, { left: 'Recycle', right: 'Make new' }
                                    ]
                                }, instruction: "Reduce, Reuse, Recycle! ♻️"
                            },
                            {
                                id: "n2l5-2", title: "Sorting Trash", type: "sort", content: {
                                    categories: ["♻️ RECYCLE", "🗑️ TRASH"], items: [
                                        { name: 'Paper', cat: '♻️ RECYCLE' }, { name: 'Plastic bottle', cat: '♻️ RECYCLE' },
                                        { name: 'Food scraps', cat: '🗑️ TRASH' }, { name: 'Metal can', cat: '♻️ RECYCLE' }, { name: 'Used tissue', cat: '🗑️ TRASH' }
                                    ]
                                }, instruction: "Help the Earth stay clean! 🌍"
                            },
                            {
                                id: "n2l5-3", title: "Saving Water", type: "quiz", questions: [
                                    { question: "Should you leave the tap running?", options: ["Yes", "No!"], correct: 1 },
                                    { question: "Short showers save water.", options: ["True", "False"], correct: 0 }
                                ]
                            },
                            {
                                id: "n2l5-4", title: "Plant a Tree!", type: "quiz", questions: [
                                    { question: "Trees give us ___ to breathe.", options: ["Oxygen", "Juice", "Candy"], correct: 0 },
                                    { question: "Trees protect the soil.", options: ["True", "False"], correct: 0 }
                                ]
                            },
                            {
                                id: "n2l5-5", title: "Earth Guardian! 🌍💎", type: "quiz", questions: [
                                    { question: "When is Earth Day?", options: ["Every day!", "Only once", "Never"], correct: 0 },
                                    { question: "Who can help the Earth?", options: ["Grown-ups", "Kids", "Everyone!"], correct: 2 }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "good-me",
                name: "Good Me",
                emoji: "💖",
                color: "var(--kid-pink)",
                icon: "🧘",
                description: "Be the best you!",
                levels: [
                    {
                        id: 1,
                        name: "Happy & Healthy",
                        lessons: [
                            {
                                id: "g2l1-1", title: "Eat the Rainbow!", type: "sort", content: {
                                    categories: ["HEALTHY 🥦", "SOMETIMES 🍪"], items: [
                                        { name: 'Apple', cat: 'HEALTHY 🥦' }, { name: 'Broccoli', cat: 'HEALTHY 🥦' },
                                        { name: 'Candy', cat: 'SOMETIMES 🍪' }, { name: 'Fish', cat: 'HEALTHY 🥦' },
                                        { name: 'Soda', cat: 'SOMETIMES 🍪' }, { name: 'Carrot', cat: 'HEALTHY 🥦' }
                                    ]
                                }, instruction: "Eating different colors makes your body strong! 🌈"
                            },
                            { id: "g2l1-2", title: "Wash Those Germs!", type: "drag_order", content: { items: ["Wet hands 💧", "Apply soap 🧼", "Scrub 20s 👏", "Rinse 🌊", "Dry 🧤"], correctOrder: ["Wet hands 💧", "Apply soap 🧼", "Scrub 20s 👏", "Rinse 🌊", "Dry 🧤"] }, instruction: "Sing 'Happy Birthday' twice while you scrub! 🎂" },
                            {
                                id: "g2l1-3", title: "Sleep is My Superpower!", type: "quiz", questions: [
                                    { question: "How much sleep does a 7-year-old need?", options: ["5 hours", "10 hours", "1 hour"], correct: 1 },
                                    { question: "Screen time before bed helps sleep.", options: ["True", "False (it wakes up your brain!)"], correct: 1 }
                                ]
                            },
                            {
                                id: "g2l1-4", title: "Power Up Your Body!", type: "matching", content: {
                                    pairs: [
                                        { left: 'Strong heart', right: 'Running 🏃' }, { left: 'Flexibility', right: 'Yoga 🧘' },
                                        { left: 'Strong muscles', right: 'Climbing 🧗' }, { left: 'Energy', right: 'Heathy food 🍎' }
                                    ]
                                }
                            },
                            {
                                id: "g2l1-5", title: "Healthy Habit Hero! 🎖️", type: "quiz", questions: [
                                    { question: "Which drink is best for your teeth?", options: ["Soda", "Juice", "Water"], correct: 2 },
                                    { question: "How many times a day should you brush?", options: ["1", "2 (Morning & Night)", "0"], correct: 1 }
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Friendship Forest",
                        lessons: [
                            {
                                id: "g2l2-1", title: "What is a Good Friend?", type: "quiz", questions: [
                                    { question: "A good friend ___.", options: ["Shares and listens", "Takes all the toys", "Is mean"], correct: 0 },
                                    { question: "Should you help a friend who is sad?", options: ["Yes", "No", "Only if they have toys"], correct: 0 }
                                ]
                            },
                            {
                                id: "g2l2-2", title: "Sharing the Fun!", type: "scenario_quiz", questions: [
                                    { instruction: "There is only one swing. You...?", options: ["Wait for your turn", "Push the other kid off", "Go home angry"], correct: 0 },
                                    { instruction: "Your friend wants to play a different game.", options: ["Play together", "Say 'No' and play alone", "Tell them they are wrong"], correct: 0 }
                                ]
                            },
                            {
                                id: "g2l2-3", title: "Kind Words", type: "matching", content: {
                                    pairs: [
                                        { left: 'You did it!', right: 'Encouragement' }, { left: 'Can I help?', right: 'Kindness' },
                                        { left: 'I am sorry', right: 'Making it right' }, { left: 'Thank you', right: 'Manners' }
                                    ]
                                }, instruction: "Words are like seeds — plant kind ones! 🌱"
                            },
                            {
                                id: "g2l2-4", title: "Including Others", type: "role_play_choice", instruction: "You see a new kid sitting alone at lunch.", options: [
                                    { text: "Ask them to sit with you", feedback: "Brilliant! You made a new friend and made them feel happy.", correct: true },
                                    { text: "Ignore them", feedback: "Think how they feel. Let's try to be kind!", correct: false },
                                    { text: "Wave and smile", feedback: "A great start! Maybe ask them to join next time.", correct: true }
                                ]
                            },
                            {
                                id: "g2l2-5", title: "Friendship Master! 🤝", type: "quiz", questions: [
                                    { question: "Is it okay to disagree with a friend?", options: ["Yes, if you stay kind", "No, never"], correct: 0 },
                                    { question: "Secrets that are scary should...", options: ["Be kept forever", "Be told to a trusted adult"], correct: 1 }
                                ]
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Feelings Explorer",
                        lessons: [
                            {
                                id: "g2l3-1", title: "Name That Feeling!", type: "matching", content: {
                                    pairs: [
                                        { left: '😊', right: 'Happy' }, { left: '😢', right: 'Sad' },
                                        { left: '😠', right: 'Angry' }, { left: '😨', right: 'Scared' }, { left: '🤢', right: 'Disgusted' }
                                    ]
                                }, instruction: "All feelings are okay! It's what we DO with them! 💡"
                            },
                            {
                                id: "g2l3-2", title: "Calm Down Corner", type: "role_play_choice", instruction: "You feel very ANGRY because you lost a game.", options: [
                                    { text: "Take 5 deep breaths 🌬️", feedback: "Great choice! Breathing calms your brain.", correct: true },
                                    { text: "Scream and kick", feedback: "This might hurt others or you. Try breathing!", correct: false },
                                    { text: "Talk to an adult", feedback: "Brilliant! Talking helps share the load.", correct: true }
                                ]
                            },
                            { id: "g2l3-3", title: "I am Brave!", type: "quiz", question: "Being brave means being scared but doing it anyway.", options: ["True", "False"], correct: 0 },
                            { id: "g2l3-4", title: "The Worry Jar", type: "scenario_quiz", instruction: "You are worried about the school play. You...?", options: ["Keep it inside", "Tell a teacher or parent", "Don't go to school"], correct: 1 },
                            {
                                id: "g2l3-5", title: "Feelings Master! 🎭", type: "sort", content: {
                                    categories: ["Makes feel Good", "Makes feel Hard"], items: [
                                        { name: 'Hugs', cat: 'Makes feel Good' }, { name: 'Being left out', cat: 'Makes feel Hard' },
                                        { name: 'Compliments', cat: 'Makes feel Good' }, { name: 'Failing a test', cat: 'Makes feel Hard' }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: "Good Choices",
                        lessons: [
                            {
                                id: "g2l4-1", title: "Is it Safe?", type: "quiz", questions: [
                                    { question: "Should you cross the road without an adult?", options: ["No, it's unsafe", "Yes, I'm big now"], correct: 0 },
                                    { question: "Should you tell an adult your internet password?", options: ["Yes", "No"], correct: 0 }
                                ]
                            },
                            { id: "g2l4-2", title: "The Truth Test", type: "scenario_quiz", instruction: "You accidentally broke a vase. You...?", options: ["Hide it", "Blame the cat", "Tell the truth"], correct: 2, feedback: "Telling the truth makes you a hero! 🦸" },
                            {
                                id: "g2l4-3", title: "Online Safety", type: "quiz", questions: [
                                    { question: "A stranger online asks for your name.", options: ["Tell them", "Close the app and tell an adult"], correct: 1 },
                                    { question: "Should you share your address online?", options: ["No!", "Yes"], correct: 0 }
                                ]
                            },
                            { id: "g2l4-4", title: "Street Safety 🚦", type: "drag_order", content: { items: ["STOP at the curb", "LOOK both ways", "LISTEN for cars", "WALK across"], correctOrder: ["STOP at the curb", "LOOK both ways", "LISTEN for cars", "WALK across"] } },
                            {
                                id: "g2l4-5", title: "Smart Choice Hero! 🎖️", type: "quiz", questions: [
                                    { question: "You find some money in the park.", options: ["Keep it", "Try to find the owner", "Leave it"], correct: 1 },
                                    { question: "Who is a safe person to ask for help?", options: ["A stranger", "A police officer or teacher", "Nobody"], correct: 1 }
                                ]
                            }
                        ]
                    },
                    {
                        id: 5,
                        name: "Manners Matter",
                        lessons: [
                            {
                                id: "g2l5-1", title: "Magic Words", type: "matching", content: {
                                    pairs: [
                                        { left: 'When asking', right: 'Please' }, { left: 'When receiving', right: 'Thank you' },
                                        { left: 'When passing by', right: 'Excuse me' }, { left: 'When hurting someone', right: 'I am sorry' }
                                    ]
                                }
                            },
                            {
                                id: "g2l5-2", title: "Table Manners", type: "quiz", questions: [
                                    { question: "How should you eat your soup?", options: ["With a loud slurping noise", "Quietly with a spoon"], correct: 1 },
                                    { question: "Talking with your mouth full is...", options: ["Okay", "Not polite"], correct: 1 }
                                ]
                            },
                            {
                                id: "g2l5-3", title: "Listening Ears 👂", type: "role_play_choice", instruction: "Your teacher is explaining a fun project.", options: [
                                    { text: "Listen quietly and look at them", feedback: "Perfect! This shows respect.", correct: true },
                                    { text: "Talk to your friend", feedback: "You might miss the instructions! Let's listen.", correct: false }
                                ]
                            },
                            {
                                id: "g2l5-4", title: "Greetings!", type: "quiz", questions: [
                                    { question: "If you meet someone for the first time...", options: ["Say 'Hello' and smile", "Run away", "Stare at your shoes"], correct: 0 },
                                    { question: "Saying 'Goodbye' is...", options: ["Nice", "Unnecessary"], correct: 0 }
                                ]
                            },
                            {
                                id: "g2l5-5", title: "Manners Master! 🏆", type: "quiz", questions: [
                                    { question: "Manners make people feel ___.", options: ["Respected and happy", "Bored", "Angry"], correct: 0 },
                                    { question: "Good manners are for...", options: ["Only school", "Everywhere!", "Only home"], correct: 1 }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Grade 3",
        emoji: "🌟",
        color: "var(--kid-orange)",
        tagline: "Discovery for 8–9 year olds",
        philosophy: "At Grade 3, children shift from basic skills to applying knowledge in real life. Math moves into multiplication, division and fractions. Language deepens into vocabulary, grammar and punctuation. Science becomes hands-on and investigative. Life skills tackle honesty, responsibility, safety and digital wellness — things children will use every single day. Every lesson in Grade 3 is designed so the child walks away thinking 'I can use this TODAY.'",
        subjectBadges: {
            "number-ninja": "Real-World Maths Master 🔢🌍",
            "word-wizard": "Grammar Guardian 📝✨",
            "science-lab": "Junior Scientist 👨‍🔬",
            "good-me": "Grade 3 Life Skills Champion 🌈"
        },
        newInteractionTypes: [
            "scenario_quiz",
            "spot_mistake",
            "drag_order",
            "role_play_choice",
            "story_read with decision points"
        ],
        mascotPhrases: [
            "You're a Grade 3 discoverer! 🌟",
            "Real-world thinker right here! 🧠",
            "That's the kind of thinking that changes the world! 🌍",
            "Almost! One more try — you've totally got this! 💪",
            "BOOM! Grade 3 brain activated! 🚀"
        ],
        subjects: [
            {
                id: "number-ninja",
                name: "Number Ninja",
                emoji: "🔢",
                color: "var(--kid-orange)",
                icon: "🥷",
                description: "Maths is your secret weapon!",
                levels: [
                    {
                        id: 1,
                        name: "Multiplication Tables 1–5",
                        difficulty: "Medium",
                        lessons: [
                            {
                                id: "n3l1-1",
                                title: "Groups Make Multiplication!",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "Multiplication = equal groups. 3 × 4 means '3 groups of 4'.", emoji: "🧮" },
                                        { text: "Aisha is setting up tables for a party 🎉 She puts 4 cups on each table. There are 3 tables.", emoji: "🥳" },
                                        { text: "Count them: 4 + 4 + 4 = 12. Or simply: 3 × 4 = 12!", emoji: "🥤" }
                                    ],
                                    questions: [
                                        { question: "2 bags with 5 apples each = ?", options: ["8", "10", "12"], correct: 1 },
                                        { question: "4 boxes with 3 pencils each = ?", options: ["10", "12", "14"], correct: 1 }
                                    ]
                                },
                                instruction: "Multiplication is just FAST adding! You already knew this! 🚀"
                            },
                            {
                                id: "n3l1-2",
                                title: "Doubles and Triples!",
                                type: "matching",
                                content: {
                                    pairs: [
                                        { left: "2 × 3 (Socks 🧦)", right: "6" },
                                        { left: "3 × 3 (Baseball ⚾)", right: "9" },
                                        { left: "2 × 5 (Hands 🙌)", right: "10" },
                                        { left: "3 × 4 (Months 📅)", right: "12" },
                                        { left: "2 × 9 (Wings 🦋)", right: "18" }
                                    ]
                                },
                                instruction: "2× is just doubling! 3× is tripling! ⚡"
                            },
                            {
                                id: "n3l1-3",
                                title: "Fours and Fives are Alive!",
                                type: "fill_blank",
                                multi: true,
                                questions: [
                                    { sentence: "5 × ___ = 20", answer: "4", options: ["3", "4", "5"] },
                                    { sentence: "4 × ___ = 16", answer: "4", options: ["3", "4", "5"] },
                                    { sentence: "___ × 5 = 35", answer: "7", options: ["6", "7", "8"] },
                                    { sentence: "___ × 4 = 24", answer: "6", options: ["5", "6", "7"] }
                                ],
                                instruction: "Pattern tip: All 5× answers end in 0 or 5 — always! 🌟"
                            },
                            {
                                id: "n3l1-4",
                                title: "Maths at the Market! 🛒",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Each orange costs 5p. Riya buys 6 oranges. How much does she pay?", options: ["25p", "30p", "35p"], correct: 1 },
                                    { question: "A minibus has 4 rows of seats. Each row has 4 seats. How many seats?", options: ["14", "16", "18"], correct: 1 },
                                    { question: "School starts at 9am. 3 lessons of 1 hour each pass. What time is it?", options: ["11am", "12pm", "1pm"], correct: 1 },
                                    { question: "You want to give 5 sweets to each of your 4 friends. How many sweets needed?", options: ["18", "20", "22"], correct: 1 }
                                ],
                                instruction: "Word problems are just real life written in sentences! 📝"
                            },
                            {
                                id: "n3l1-5",
                                title: "Number Ninja Speed Round! 🥷⚡",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "3 × 7 = ?", options: ["20", "21", "22"], correct: 1 },
                                    { question: "4 × 6 = ?", options: ["22", "24", "26"], correct: 1 },
                                    { question: "5 × 8 = ?", options: ["38", "40", "42"], correct: 1 },
                                    { question: "2 × 9 = ?", options: ["16", "18", "20"], correct: 1 },
                                    { question: "3 × 8 = ?", options: ["22", "24", "26"], correct: 1 },
                                    { question: "4 × 9 = ?", options: ["34", "36", "38"], correct: 1 },
                                    { question: "5 × 6 = ?", options: ["28", "30", "32"], correct: 1 },
                                    { question: "2 × 7 = ?", options: ["12", "14", "16"], correct: 1 },
                                    { question: "3 × 6 = ?", options: ["16", "18", "20"], correct: 1 },
                                    { question: "4 × 7 = ?", options: ["26", "28", "30"], correct: 1 }
                                ],
                                instruction: "Times tables 1–5 MASTERED! You now have a superpower that works in shops, kitchens, sports — everywhere! 🥷🏆"
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Multiplication Tables 6–10",
                        difficulty: "Medium-Hard",
                        lessons: [
                            {
                                id: "n3l2-1",
                                title: "Six-Pack Power! 💪",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "6 × 3 = ?", options: ["16", "18", "20"], correct: 1 },
                                    { question: "6 × 6 = ?", options: ["30", "36", "42"], correct: 1 },
                                    { question: "6 × 8 = ?", options: ["42", "48", "54"], correct: 1 },
                                    { question: "Does 6 × 7 = 42?", options: ["Yes", "No"], correct: 0 }
                                ],
                                instruction: "6×7=42: Six sevens equal forty-two — say it like a rap! 🎤"
                            },
                            {
                                id: "n3l2-2",
                                title: "Lucky Sevens! 🍀",
                                type: "matching",
                                content: {
                                    pairs: [
                                        { left: "7 × 3", right: "21" },
                                        { left: "7 × 6", right: "42" },
                                        { left: "7 × 8", right: "56" },
                                        { left: "7 × 9", right: "63" },
                                        { left: "7 × 4", right: "28" }
                                    ]
                                },
                                instruction: "Memory trick: 5-6-7-8: 56 = 7 × 8! 🤩"
                            },
                            {
                                id: "n3l2-3",
                                title: "Eight is Great, Nine is Divine! 🌟",
                                type: "fill_blank",
                                multi: true,
                                questions: [
                                    { sentence: "9 × ___ = 54", answer: "6", options: ["5", "6", "7"] },
                                    { sentence: "8 × ___ = 64", answer: "8", options: ["7", "8", "9"] },
                                    { sentence: "___ × 9 = 81", answer: "9", options: ["8", "9", "10"] },
                                    { sentence: "___ × 8 = 72", answer: "9", options: ["8", "9", "10"] }
                                ],
                                instruction: "9× MAGIC TRICK: Hold down your 3rd finger → 2 left, 7 right = 27! 🪄"
                            },
                            {
                                id: "n3l2-4",
                                title: "Tens are the Easiest! 🎯",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Which table does 63 belong to?", options: ["7 × 9", "6 × 8"], correct: 0 },
                                    { question: "Which table does 48 belong to?", options: ["6 × 8", "7 × 7"], correct: 0 },
                                    { question: "Is 45 in the 9× table?", options: ["Yes (9×5)", "No"], correct: 0 },
                                    { question: "Is 54 in the 6× table?", options: ["Yes (6×9)", "No"], correct: 0 }
                                ],
                                instruction: "Tens: Just add a ZERO! 10 × 7 = 70! ✅"
                            },
                            {
                                id: "n3l2-5",
                                title: "Full Ninja Tables Test! 🥷🏆",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "6 × 8 = ?", options: ["42", "48", "54"], correct: 1 },
                                    { question: "7 × 9 = ?", options: ["61", "63", "65"], correct: 1 },
                                    { question: "8 × 7 = ?", options: ["54", "56", "58"], correct: 1 },
                                    { question: "9 × 4 = ?", options: ["34", "36", "38"], correct: 1 },
                                    { question: "6 × 7 = ?", options: ["40", "42", "44"], correct: 1 }
                                ],
                                instruction: "Tables 1–10 CONQUERED! You have EARNED your full 10x10 Ninja Tables Chart! 📊🥷🏆"
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Division Basics",
                        difficulty: "Medium-Hard",
                        lessons: [
                            {
                                id: "n3l3-1",
                                title: "Sharing is Dividing!",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "Omar has 12 cookies. He wants to share them equally between 4 friends.", emoji: "🍪" },
                                        { text: "12 shared into 4 groups = 3 each. 12 ÷ 4 = 3.", emoji: "👨‍👩‍👧‍👦" },
                                        { text: "If 4 × 3 = 12, then 12 ÷ 4 = 3 — they're opposites! 🔄", emoji: "🪄" }
                                    ],
                                    questions: [
                                        { question: "20 ÷ 4 = ?", options: ["4", "5", "6"], correct: 1 },
                                        { question: "15 ÷ 3 = ?", options: ["4", "5", "6"], correct: 1 }
                                    ]
                                },
                                instruction: "Division is just REVERSE multiplication! 🔄"
                            },
                            {
                                id: "n3l3-2",
                                title: "Divide by 2 and 5",
                                type: "fill_blank",
                                multi: true,
                                questions: [
                                    { sentence: "18 ÷ 2 = ___ (Half of 18)", answer: "9", options: ["8", "9", "10"] },
                                    { sentence: "25 ÷ 5 = ___", answer: "5", options: ["4", "5", "6"] },
                                    { sentence: "You have 30 mins. Each task takes 5 mins. Tasks? 30 ÷ 5 = ___", answer: "6", options: ["5", "6", "7"] },
                                    { sentence: "Halve 24 to share between 2 friends. 24 ÷ 2 = ___", answer: "12", options: ["10", "12", "14"] }
                                ],
                                instruction: "Dividing by 2 = Finding HALF. Dividing by 5? Look for 0 or 5! ✂️"
                            },
                            {
                                id: "n3l3-3",
                                title: "Thirds and Tens!",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "£30 split 3 ways = £___ each", options: ["10", "15", "20"], correct: 0 },
                                    { question: "90p shared into 10 portions = ___p each", options: ["8", "9", "10"], correct: 1 },
                                    { question: "27 children into 3 equal teams = ___ per team", options: ["7", "8", "9"], correct: 2 }
                                ],
                                instruction: "Tip: Dividing by 10 = remove the zero! 🎯"
                            },
                            {
                                id: "n3l3-4",
                                title: "Division Word Problems",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Priya bakes 24 biscuits and puts them in bags of 6. How many bags?", options: ["3", "4", "5"], correct: 1 },
                                    { question: "A 40-minute match is split into two equal halves. How long is each?", options: ["15", "20", "25"], correct: 1 },
                                    { question: "35 books shared equally between 7 shelves. Books per shelf?", options: ["4", "5", "6"], correct: 1 },
                                    { question: "You earn £18 over 3 weeks equally. How much per week?", options: ["£5", "£6", "£7"], correct: 1 }
                                ],
                                instruction: "Division is one of the most useful skills in REAL life! 🌍"
                            },
                            {
                                id: "n3l3-5",
                                title: "The Fact Family! 👨‍👩‍👧‍👦",
                                type: "fill_blank",
                                multi: true,
                                questions: [
                                    { sentence: "If 8 × 7 = 56, then 56 ÷ 8 = ___", answer: "7", options: ["6", "7", "8"] },
                                    { sentence: "If 9 × 6 = 54, then 54 ÷ 9 = ___", answer: "6", options: ["5", "6", "7"] }
                                ],
                                instruction: "Fact Families: 6 × 4 = 24 means 24 ÷ 6 = 4! 👨‍👩‍👧‍👦"
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: "Fractions",
                        difficulty: "Hard",
                        lessons: [
                            {
                                id: "n3l4-1",
                                title: "What is a Fraction?",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "A fraction is sharing WHOLE things equally! 🍕", emoji: "🍰" },
                                        { text: "½ is one half, ¼ is one quarter, ⅓ is one third.", emoji: "📏" },
                                        { text: "Numerator (TOP) = parts you TAKE. Denominator (BOTTOM) = total parts.", emoji: "🔢" }
                                    ],
                                    questions: [
                                        { question: "A cake is cut into 4 equal pieces. You take 1. What fraction?", options: ["½", "¼", "¾"], correct: 1 },
                                        { question: "Half of 20 = ?", options: ["5", "10", "15"], correct: 1 }
                                    ]
                                },
                                instruction: "Fractions help us divide things fairly! 🍕"
                            },
                            {
                                id: "n3l4-2",
                                title: "Finding Fractions of Numbers",
                                type: "fill_blank",
                                multi: true,
                                questions: [
                                    { sentence: "½ of 18 = ___", answer: "9", options: ["8", "9", "10"] },
                                    { sentence: "⅓ of 21 = ___", answer: "7", options: ["6", "7", "8"] },
                                    { sentence: "¼ of 20 = ___", answer: "5", options: ["4", "5", "6"] },
                                    { sentence: "¾ of 20 = ___", answer: "15", options: ["10", "15", "20"] }
                                ],
                                instruction: "To find ¼ of a number, just DIVIDE by 4! 🔍"
                            },
                            {
                                id: "n3l4-3",
                                title: "Comparing Fractions",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Which is bigger: ½ or ¼ of a pizza?", options: ["½", "¼"], correct: 0 },
                                    { question: "Ordering smallest to biggest: ¼, ½, ⅓", options: ["¼, ⅓, ½", "½, ⅓, ¼"], correct: 0 },
                                    { question: "Is ¾ more or less than ½?", options: ["More", "Less"], correct: 0 }
                                ],
                                instruction: "Bigger bottom number = SMALLER pieces! 🍕"
                            },
                            {
                                id: "n3l4-4",
                                title: "Fractions in Real Life",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Recipe needs ½ cup sugar for 4 people. For 8? (Double)", options: ["½ cup", "1 cup", "1½ cups"], correct: 1 },
                                    { question: "You have £20. Spend ¼ on a book. Cost?", options: ["£4", "£5", "£6"], correct: 1 },
                                    { question: "School is 6 hours. ⅓ is lunch and breaks. Hours?", options: ["1", "2", "3"], correct: 1 },
                                    { question: "A 100m race. You have run ¾. How far?", options: ["50m", "75m", "80m"], correct: 1 }
                                ],
                                instruction: "Fractions help in cooking, money, time and sport! 🌍"
                            },
                            {
                                id: "n3l4-5",
                                title: "Fractions Grand Quiz",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "½ of 30 = ?", options: ["10", "15", "20"], correct: 1 },
                                    { question: "¼ of 40 = ?", options: ["8", "10", "12"], correct: 1 },
                                    { question: "⅓ of 27 = ?", options: ["7", "9", "11"], correct: 1 },
                                    { question: "¾ of 24 = ?", options: ["16", "18", "20"], correct: 1 },
                                    { question: "Which is bigger: ⅓ or ¼?", options: ["⅓", "¼"], correct: 0 }
                                ],
                                instruction: "Fraction Ninja! You can split, share and calculate anything! 🥷½🏆"
                            }
                        ]
                    },
                    {
                        id: 5,
                        name: "Word Problems",
                        difficulty: "Hard",
                        lessons: [
                            {
                                id: "n3l5-1",
                                title: "The RUCSAC Method! 🔐",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "R-Read, U-Underline, C-Choose (+,-,×,÷), S-Solve, A-Answer, C-Check! 🔐", emoji: "🧮" },
                                        { text: "There are 5 shelves. Each has 8 books. ¼ are science. How many?", emoji: "📚" },
                                        { text: "Step 1: 5 × 8 = 40. Step 2: ¼ of 40 = 10 science books! ✅", emoji: "🛡️" }
                                    ],
                                    questions: [
                                        { question: "What does R stand for in RUCSAC?", options: ["Run", "Read", "Roll"], correct: 1 },
                                        { question: "If there are 4 shelves of 10, total?", options: ["30", "40", "50"], correct: 1 }
                                    ]
                                },
                                instruction: "RUCSAC is your secret weapon for any problem! ⚔️"
                            },
                            {
                                id: "n3l5-2",
                                title: "Money Problems 💷",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "3 apples (6p each) + 2 oranges (9p each) = ?", options: ["32p", "36p", "40p"], correct: 1 },
                                    { question: "Save £5/week for 8 weeks. Spend ¼ on gift. Cost?", options: ["£8", "£10", "£12"], correct: 1 },
                                    { question: "3 friends share £24 bill. 1 has £3 voucher. They pay?", options: ["£5", "£8"], correct: 0 }
                                ],
                                instruction: "These are the skills adults use every single day! 💷"
                            },
                            {
                                id: "n3l5-3",
                                title: "Time Problems ⏰",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "5 lessons of 45m + 15m break from 9:00am. End?", options: ["12:30pm", "1:00pm", "1:30pm"], correct: 1 },
                                    { question: "A journey takes 2½ hours + ¼ hour stop. Total?", options: ["2h 30m", "2h 45m", "3h"], correct: 1 }
                                ],
                                instruction: "Planning your day needs Time Ninja skills! ⏰"
                            },
                            {
                                id: "n3l5-4",
                                title: "Measurement Problems 📏",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "36cm ribbon cut into 4. How long is each?", options: ["8cm", "9cm", "10cm"], correct: 1 },
                                    { question: "250g flour for 1 cake. 3 cakes need?", options: ["650g", "750g", "850g"], correct: 1 },
                                    { question: "5m wall. Each tile ½m wide. How many tiles?", options: ["8", "10", "12"], correct: 1 }
                                ],
                                instruction: "Builders, cooks and scientists use this daily! 👨‍🍳🧪"
                            },
                            {
                                id: "n3l5-5",
                                title: "Number Ninja FINAL TEST! 🥷🏆",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Fair raised £120. ¼ to charity. Charity gets?", options: ["£20", "£30", "£40"], correct: 1 },
                                    { question: "£90 split equally between 3 clubs. Each?", options: ["£25", "£30", "£35"], correct: 1 },
                                    { question: "Journey of 2 hours. ¼ is break. Rest?", options: ["1.5h", "1h 45m", "1h 30m"], correct: 1 }
                                ],
                                instruction: "Real-World Maths Master! You are Grade 3 ready for LIFE! 🔢🌍🏆"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "word-wizard",
        name: "Word Wizard",
        emoji: "🪄",
        color: "var(--kid-blue)",
        icon: "🪄",
        description: "Words are your magic wand!",
        levels: [
            {
                id: 1,
                name: "Synonyms and Antonyms",
                difficulty: "Medium",
                lessons: [
                    {
                        id: "w3l1-1",
                        title: "Words That Mean the Same!",
                        type: "matching",
                        content: {
                            pairs: [
                                { left: "Big", right: "Enormous" },
                                { left: "Small", right: "Tiny" },
                                { left: "Happy", right: "Joyful" },
                                { left: "Fast", right: "Rapid" },
                                { left: "Beautiful", right: "Gorgeous" }
                            ]
                        },
                        instruction: "Synonyms make your writing much more interesting! 🌈"
                    },
                    {
                        id: "w3l1-2",
                        title: "Opposites Attract!",
                        type: "matching",
                        content: {
                            pairs: [
                                { left: "Hot", right: "Cold" },
                                { left: "Fast", right: "Slow" },
                                { left: "Early", right: "Late" },
                                { left: "Generous", right: "Selfish" },
                                { left: "Ancient", right: "Modern" }
                            ]
                        },
                        instruction: "Antonyms help you describe differences clearly! 🔄"
                    },
                    {
                        id: "w3l1-3",
                        title: "Shades of Meaning",
                        type: "drag_order",
                        multi: true,
                        questions: [
                            { instruction: "Order from weakest to strongest feeling:", items: ["Like", "Enjoy", "Love", "Adore"], correctOrder: ["Like", "Enjoy", "Love", "Adore"] },
                            { instruction: "Order from coolest to hottest:", items: ["Warm", "Hot", "Boiling", "Scalding"], correctOrder: ["Warm", "Hot", "Boiling", "Scalding"] }
                        ],
                        instruction: "Choosing the RIGHT shade of a word makes your writing POWERFUL! 🎨"
                    },
                    {
                        id: "w3l1-4",
                        title: "Better Sentences!",
                        type: "fill_blank",
                        multi: true,
                        questions: [
                            { sentence: "The dog was not just big, it was ___.", answer: "gigantic", options: ["small", "gigantic", "sad"] },
                            { sentence: "She ran ___ to win the race.", answer: "speedily", options: ["slowly", "speedily", "quietly"] },
                            { sentence: "The room was bright, then it became ___.", answer: "dark", options: ["light", "dark", "warm"] }
                        ],
                        instruction: "Replace boring words with interesting synonyms! ✍️"
                    },
                    {
                        id: "w3l1-5",
                        title: "Word Wizard Quiz!",
                        type: "quiz",
                        multi: true,
                        questions: [
                            { question: "Synonym for 'happy'?", options: ["Sad", "Joyful", "Angry"], correct: 1 },
                            { question: "Antonym for 'ancient'?", options: ["Old", "Modern", "Huge"], correct: 1 },
                            { question: "Which is strongest: tired, exhausted, sleepy?", options: ["Tired", "Exhausted", "Sleepy"], correct: 1 }
                        ],
                        instruction: "Vocabulary Champion! Your word bank is now rich and powerful! 🪄📚"
                    }
                ]
            },
            {
                id: 2,
                name: "Compound Words",
                difficulty: "Medium",
                lessons: [
                    {
                        id: "w3l2-1",
                        title: "Word + Word = New Word!",
                        type: "matching",
                        content: {
                            pairs: [
                                { left: "Sun", right: "Flower" },
                                { left: "Rain", right: "Bow" },
                                { left: "Foot", right: "Ball" },
                                { left: "Star", right: "Fish" },
                                { left: "Tooth", right: "Brush" }
                            ]
                        },
                        instruction: "A compound word joins two smaller words together! 🧩"
                    },
                    {
                        id: "w3l2-2",
                        title: "Word Builder! 🏗️",
                        type: "fill_blank",
                        multi: true,
                        questions: [
                            { sentence: "Water + ___ = Waterfall", answer: "fall", options: ["fall", "jump", "run"] },
                            { sentence: "Snow + ___ = Snowman", answer: "man", options: ["boy", "man", "dog"] },
                            { sentence: "Door + ___ = Doorbell", answer: "bell", options: ["bell", "knob", "step"] }
                        ],
                        instruction: "One word can start many compound words! 🧱"
                    },
                    {
                        id: "w3l2-3",
                        title: "Decode the Long Words! 🔍",
                        type: "quiz",
                        multi: true,
                        questions: [
                            { question: "What does 'sunburn' mean?", options: ["Sun + Burn", "Day + Light"], correct: 0 },
                            { question: "What is 'breakfast'?", options: ["Breaking a fast", "Bread + Fast"], correct: 0 },
                            { question: "Is 'homework' a compound word?", options: ["Yes", "No"], correct: 0 }
                        ],
                        instruction: "Look for two smaller words hiding inside long ones! 🔍"
                    },
                    {
                        id: "w3l2-4",
                        title: "Context is Key!",
                        type: "fill_blank",
                        multi: true,
                        questions: [
                            { sentence: "After the storm, we saw a ___.", answer: "rainbow", options: ["sunflower", "rainbow", "starfish"] },
                            { sentence: "I clean my teeth with a ___.", answer: "toothbrush", options: ["toothpaste", "toothbrush", "doorstep"] }
                        ],
                        instruction: "Compound words make your writing precise and clear! 🎯"
                    },
                    {
                        id: "w3l2-5",
                        title: "Compound Championship!",
                        type: "quiz",
                        multi: true,
                        questions: [
                            { question: "Join: Bed + Room", options: ["Bedding", "Bedroom", "Roomy"], correct: 1 },
                            { question: "Is 'butterfly' a compound word?", options: ["Yes", "No"], correct: 0 },
                            { question: "Which is NOT a compound word?", options: ["Firetruck", "Apple", "Notebook"], correct: 1 }
                        ],
                        instruction: "Word LEGO set MASTERED! You can build long words now! 🧱🪄"
                    }
                ]
            },
            {
                id: 3,
                name: "Singular and Plural Rules",
                difficulty: "Medium",
                lessons: [
                    {
                        id: "w3l3-1",
                        title: "One Becomes Many!",
                        type: "fill_blank",
                        multi: true,
                        questions: [
                            { sentence: "1 cat → 2 ___", answer: "cats", options: ["cat", "cats", "cates"] },
                            { sentence: "1 tree → 5 ___", answer: "trees", options: ["tree", "trees", "treeses"] },
                            { sentence: "1 book → 3 ___", answer: "books", options: ["book", "bookes", "books"] }
                        ],
                        instruction: "Basic rule: Most nouns just need an -s! 🐱"
                    },
                    {
                        id: "w3l3-2",
                        title: "The Hissing Rule (-es)",
                        type: "fill_blank",
                        multi: true,
                        questions: [
                            { sentence: "1 bus → 2 ___", answer: "buses", options: ["buss", "buses", "bussies"] },
                            { sentence: "1 box → 3 ___", answer: "boxes", options: ["boxs", "boxies", "boxes"] },
                            { sentence: "1 dish → 4 ___", answer: "dishes", options: ["dishs", "dishes", "dishies"] }
                        ],
                        instruction: "If it HISSES (s, ss, sh, ch, x, z), add -es! 🐍"
                    },
                    {
                        id: "w3l3-3",
                        title: "Tricky Plurals!",
                        type: "matching",
                        content: {
                            pairs: [
                                { left: "Child", right: "Children" },
                                { left: "Tooth", right: "Teeth" },
                                { left: "Mouse", right: "Mice" },
                                { left: "Sheep", right: "Sheep" },
                                { left: "Person", right: "People" }
                            ]
                        },
                        instruction: "Irregular plurals don't follow rules — they are special! 🎭"
                    },
                    {
                        id: "w3l3-4",
                        title: "The -y to -ies Rule",
                        type: "fill_blank",
                        multi: true,
                        questions: [
                            { sentence: "1 baby → 2 ___", answer: "babies", options: ["babys", "babies", "babyes"] },
                            { sentence: "1 city → 3 ___", answer: "cities", options: ["citys", "cities", "cityes"] },
                            { sentence: "1 day → 4 ___", answer: "days", options: ["days", "daies", "dayes"] }
                        ],
                        instruction: "Note: Consonant + y → ies. BUT Vowel + y → just add s! 🦋"
                    },
                    {
                        id: "w3l3-5",
                        title: "Plural Pro Quiz!",
                        type: "quiz",
                        multi: true,
                        questions: [
                            { question: "Plural of 'fox'?", options: ["Foxs", "Foxes", "Foxies"], correct: 1 },
                            { question: "Plural of 'sheep'?", options: ["Sheeps", "Sheep", "Sheepes"], correct: 1 },
                            { question: "Plural of 'child'?", options: ["Childs", "Children", "Childes"], correct: 1 }
                        ],
                        instruction: "Plural Master! Your sentences will always be correct now! ✍️🏆"
                    }
                ]
            },
            {
                id: 4,
                name: "Adjectives and Nouns",
                difficulty: "Medium-Hard",
                lessons: [
                    {
                        id: "w3l4-1",
                        title: "Name Everything!",
                        type: "sort",
                        content: {
                            categories: ["Proper Noun (Specific)", "Common Noun (General)", "Abstract Noun (Idea)", "Collective Noun (Group)"],
                            items: [
                                { name: "London", cat: "Proper Noun (Specific)" },
                                { name: "city", cat: "Common Noun (General)" },
                                { name: "Aisha", cat: "Proper Noun (Specific)" },
                                { name: "happiness", cat: "Abstract Noun (Idea)" },
                                { name: "courage", cat: "Abstract Noun (Idea)" },
                                { name: "a flock of birds", cat: "Collective Noun (Group)" },
                                { name: "a pride of lions", cat: "Collective Noun (Group)" }
                            ]
                        },
                        instruction: "Nouns name PEOPLE, PLACES, THINGS, and even IDEAS or GROUPS! 🏷️"
                    },
                    {
                        id: "w3l4-2",
                        title: "Paint with Words!",
                        type: "fill_blank",
                        multi: true,
                        questions: [
                            { sentence: "The ___ dog barked.", answer: "fierce", options: ["fierce", "ran", "slow"] },
                            { sentence: "I ate a ___ cake.", answer: "chocolatey", options: ["ate", "chocolatey", "sweetLY"] }
                        ],
                        instruction: "Adjectives tell us WHAT KIND, HOW MANY, or WHICH ONE! 🎨"
                    },
                    {
                        id: "w3l4-3",
                        title: "Comparing Adjectives",
                        type: "fill_blank",
                        multi: true,
                        questions: [
                            { sentence: "Everest is the ___ mountain.", answer: "tallest", options: ["tall", "taller", "tallest"] },
                            { sentence: "Today is ___ than yesterday.", answer: "better", options: ["good", "better", "best"] }
                        ],
                        instruction: "Tall → Taller → Tallest. Good → Better → Best! 📏"
                    },
                    {
                        id: "w3l4-4",
                        title: "From Boring to BRILLIANT! ✨",
                        type: "fill_blank",
                        multi: true,
                        questions: [
                            { sentence: "The dog was nice. → The dog was ___.", answer: "magnificent", options: ["bad", "magnificent", "wet"] },
                            { sentence: "The food was bad. → The food was ___.", answer: "tasteless", options: ["good", "tasteless", "warm"] },
                            { sentence: "She had a nice day. → She had a ___ day.", answer: "glorious", options: ["rainy", "glorious", "okay"] }
                        ],
                        instruction: "Upgrade weak sentences using strong adjectives and follow the OSASCOMP order! ✍️🌟"
                    },
                    {
                        id: "w3l4-5",
                        title: "Adjective Order Challenge!",
                        type: "quiz",
                        multi: true,
                        questions: [
                            { question: "Which describes a car best?", options: ["lovely little red", "red lovely little", "little red lovely"], correct: 0 },
                            { question: "Opinion → Size → Color. True?", options: ["Yes", "No"], correct: 0 }
                        ],
                        instruction: "You are now writing with the skill of a novelist! 📖🪄"
                    }
                ]
            },
            {
                id: 5,
                name: "Punctuation",
                difficulty: "Hard",
                lessons: [
                    {
                        id: "w3l5-1",
                        title: "The Golden Rules!",
                        type: "quiz",
                        multi: true,
                        questions: [
                            { question: "Sentences start with a ___.", options: ["Small letter", "Capital letter", "Number"], correct: 1 },
                            { question: "Proper nouns (names) need capitals?", options: ["Always", "Never", "Sometimes"], correct: 0 },
                            { question: "Ending most sentences?", options: ["Comma", "Full stop", "Space"], correct: 1 }
                        ],
                        instruction: "Capitals and full stops show where ideas start and end! 🛑"
                    },
                    {
                        id: "w3l5-2",
                        title: "Questions and Feelings!",
                        type: "quiz",
                        multi: true,
                        questions: [
                            { question: "'How are you' needs a ___.", options: [".", "?", "!"], correct: 1 },
                            { question: "'Watch out' needs a ___.", options: [".", "?", "!"], correct: 2 },
                            { question: "Use voice UP at the end of a...?", options: ["Question", "Statement", "Exclamation"], correct: 0 }
                        ],
                        instruction: "Punctuation tells the reader HOW to say the words! ❓❗"
                    },
                    {
                        id: "w3l5-3",
                        title: "The Mighty Comma!",
                        type: "fill_blank",
                        multi: true,
                        questions: [
                            { sentence: "I like apples___ oranges and pears.", answer: ",", options: [",", ".", "!"] },
                            { sentence: "After school___ we went home.", answer: ",", options: [",", ".", ";"] }
                        ],
                        instruction: "Commas save lives! 'Let's eat, Grandma!' vs 'Let's eat Grandma!' 😅🥗"
                    },
                    {
                        id: "w3l5-4",
                        title: "Apostrophes: Shortening & Owning!",
                        type: "matching",
                        content: {
                            pairs: [
                                { left: "It is", right: "It's" },
                                { left: "Do not", right: "Don't" },
                                { left: "The cat + tail", right: "The cat's tail" },
                                { left: "The boy + bike", right: "The boy's bike" },
                                { left: "Aisha + pen", right: "Aisha's pen" }
                            ]
                        },
                        instruction: "Apostrophes have two jobs: shortening words and showing who OWNS something! ✂️👜"
                    },
                    {
                        id: "w3l5-5",
                        title: "Grammar Guardian Final!",
                        type: "quiz",
                        multi: true,
                        questions: [
                            { question: "Spoken words go inside...?", options: ["Brackets", "Speech marks", "Full stops"], correct: 1 },
                            { question: "New speaker needs a...?", options: ["New line", "New page", "Loud voice"], correct: 0 },
                            { question: "Punctuation goes INSIDE speech marks?", options: ["Yes", "No"], correct: 0 }
                        ],
                        instruction: "Grammar Guardian Mastered! Every story you write will shine! 📝✨🏆"
                    }
                ]
            },
            {
                id: "science-lab",
                name: "Science Lab",
                emoji: "🔬",
                color: "var(--kid-teal)",
                icon: "🔬",
                description: "Science explains the world around you!",
                levels: [
                    {
                        id: 1,
                        name: "States of Matter",
                        difficulty: "Medium",
                        lessons: [
                            {
                                id: "s3l1-1",
                                title: "What is Matter?",
                                type: "sort",
                                content: {
                                    categories: ["Solid", "Liquid", "Gas"],
                                    items: [
                                        { name: "Book", cat: "Solid" },
                                        { name: "Water", cat: "Liquid" },
                                        { name: "Air", cat: "Gas" },
                                        { name: "Ice", cat: "Solid" },
                                        { name: "Milk", cat: "Liquid" },
                                        { name: "Steam", cat: "Gas" },
                                        { name: "Glass", cat: "Solid" },
                                        { name: "Honey", cat: "Liquid" },
                                        { name: "Smoke", cat: "Gas" }
                                    ]
                                },
                                instruction: "Matter is everything around us! Surprising fact: Glass is actually a very SLOW-moving liquid! ⚛️🪟"
                            },
                            {
                                id: "s3l1-2",
                                title: "Rock Solid!",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Do solids keep their shape?", options: ["Yes", "No"], correct: 0 },
                                    { question: "Can you pour a solid?", options: ["Yes", "No"], correct: 1 },
                                    { question: "Which is a rigid solid?", options: ["Rubber band", "A brick", "Cloth"], correct: 1 }
                                ],
                                instruction: "Solids are firm and keep their shape! 🧱"
                            },
                            {
                                id: "s3l1-3",
                                title: "Go With the Flow!",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Do liquids have a fixed shape?", options: ["Yes", "No (they take the shape of the container)"], correct: 1 },
                                    { question: "Which liquid is most 'viscous' (thickest)?", options: ["Water", "Honey", "Milk"], correct: 1 },
                                    { question: "Can liquids be poured?", options: ["Yes", "No"], correct: 0 }
                                ],
                                instruction: "Liquids flow and take the shape of whatever holds them! 💧"
                            },
                            {
                                id: "s3l1-4",
                                title: "Now You See It, Now You Don't!",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "When ice (solid) turns to water (liquid), it's called MELTING. 🧊💧", emoji: "☀️" },
                                        { text: "When water turns to steam, it's called EVAPORATION. ☁️", emoji: "🫕" },
                                        { text: "When steam turns back to water droplets, it's called CONDENSATION. 🪟", emoji: "💧" }
                                    ],
                                    questions: [
                                        { question: "Solid → Liquid is called...?", options: ["Freezing", "Melting", "Boiling"], correct: 1 },
                                        { question: "Steam is which state of matter?", options: ["Solid", "Liquid", "Gas"], correct: 2 }
                                    ]
                                },
                                instruction: "Matter changes state when heated or cooled. You see condensation when you breathe on a cold mirror! 🪟🌬️"
                            },
                            {
                                id: "s3l1-5",
                                title: "Matter Lab Quiz!",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "What is condensation?", options: ["Liquid to gas", "Gas to liquid", "Solid to gas"], correct: 1 },
                                    { question: "Water freezes at...?", options: ["0°C", "10°C", "100°C"], correct: 0 },
                                    { question: "Is your breath a gas?", options: ["Yes", "No"], correct: 0 }
                                ],
                                instruction: "States of Matter Mastered! You understand the building blocks of the world! 🔬🌍🏆"
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Simple Machines",
                        difficulty: "Medium",
                        lessons: [
                            {
                                id: "s3l2-1",
                                title: "Making Hard Work Easy!",
                                type: "sort",
                                content: {
                                    categories: ["Lever", "Wheel & Axle", "Pulley", "Inclined Plane", "Wedge", "Screw"],
                                    items: [
                                        { name: "Scissors", cat: "Lever" },
                                        { name: "Bicycle Wheel", cat: "Wheel & Axle" },
                                        { name: "Flagpole", cat: "Pulley" },
                                        { name: "Wheelchair Ramp", cat: "Inclined Plane" },
                                        { name: "Knife", cat: "Wedge" },
                                        { name: "Jar Lid", cat: "Screw" }
                                    ]
                                },
                                instruction: "Simple machines change the direction or amount of force needed to do a job! ⚙️"
                            },
                            {
                                id: "s3l2-2",
                                title: "Levers and Pulleys",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Where is the 'fulcrum' on a seesaw?", options: ["At the ends", "In the middle (the pivot)", "On the handle"], correct: 1 },
                                    { question: "What does a pulley use to lift things?", options: ["A motor", "A wheel and rope", "A magnet"], correct: 1 },
                                    { question: "Why are door handles at the edge?", options: ["For style", "Less force needed far from hinge", "Easy to reach"], correct: 1 }
                                ],
                                instruction: "Levers and pulleys help us lift heavy things with less effort! 💪"
                            },
                            {
                                id: "s3l2-3",
                                title: "Inclined Planes and Wedges",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "A ramp is which type of machine?", options: ["Wedge", "Inclined Plane", "Pulley"], correct: 1 },
                                    { question: "Which spreads force over a LARGER distance?", options: ["Steep ramp", "Gentle ramp"], correct: 1 },
                                    { question: "A zipper is actually a series of...?", options: ["Levers", "Wedges", "Screws"], correct: 1 }
                                ],
                                instruction: "Ramps make going up easier, and wedges help us split things apart! 📐🔪"
                            },
                            {
                                id: "s3l2-4",
                                title: "Wheels, Axles and Screws",
                                type: "matching",
                                content: {
                                    pairs: [
                                        { left: "Car Steering Wheel", right: "Wheel and Axle" },
                                        { left: "Light Bulb Base", right: "Screw" },
                                        { left: "Doorknob", right: "Wheel and Axle" },
                                        { left: "Bottle Cap", right: "Screw" }
                                    ]
                                },
                                instruction: "Wheels help us turn things, and screws hold things together with great power! 🔩"
                            },
                            {
                                id: "s3l2-5",
                                title: "Engineer in Training Quiz!",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Which machine is a winding staircase?", options: ["Lever", "Screw", "Wedge"], correct: 1 },
                                    { question: "A crowbar is a...?", options: ["Lever", "Pulley", "Inclined Plane"], correct: 0 },
                                    { question: "Do machines reduce the TOTAL work?", options: ["Yes", "No (they make it easier)"], correct: 1 }
                                ],
                                instruction: "Simple Machines Mastered! You see the mechanical world clearly now! ⚙️🌍🏆"
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Human Body Systems",
                        difficulty: "Medium",
                        lessons: [
                            {
                                id: "s3l3-1",
                                title: "Food's Amazing Journey!",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "Digestion starts in the MOUTH where teeth chew food. 🦷", emoji: "🥪" },
                                        { text: "The STOMACH churns food with acid for hours. 🧪", emoji: "🥣" },
                                        { text: "The SMALL INTESTINE is 6 metres long and absorbs nutrients! 🚌", emoji: "🩸" }
                                    ],
                                    questions: [
                                        { question: "Where does digestion start?", options: ["Stomach", "Mouth", "Small Intestine"], correct: 1 },
                                        { question: "How long is the small intestine?", options: ["1 metre", "6 metres", "20 metres"], correct: 1 }
                                    ]
                                },
                                instruction: "Your body is a non-stop processing factory for energy! 🍽️🏃"
                            },
                            {
                                id: "s3l3-2",
                                title: "Your Body's Framework!",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "How many bones in an adult skeleton?", options: ["150", "206", "300"], correct: 1 },
                                    { question: "Which bone protects your brain?", options: ["Ribs", "Skull", "Femur"], correct: 1 },
                                    { question: "What is the longest bone?", options: ["Spine", "Femur", "Humerus"], correct: 1 }
                                ],
                                instruction: "Your skeleton supports you, protects you, and helps you move! 🦴"
                            },
                            {
                                id: "s3l3-3",
                                title: "Powered by Muscles!",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Can muscles push?", options: ["Yes", "No (they only pull)"], correct: 1 },
                                    { question: "Which muscle never stops?", options: ["Bicep", "Heart", "Leg"], correct: 1 },
                                    { question: "Muscles work in...?", options: ["Groups of 3", "Pairs", "Alone"], correct: 1 }
                                ],
                                instruction: "Muscles pull on bones to make you move, jump, and dance! 💪"
                            },
                            {
                                id: "s3l3-4",
                                title: "Your Delivery Network!",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "The HEART pumps blood 100,000 times a day! ❤️", emoji: "🫀" },
                                        { text: "ARTERIES carry blood AWAY from the heart. 🚀", emoji: "🔴" },
                                        { text: "Red blood cells carry OXYGEN to your whole body. 🌬️", emoji: "🩸" }
                                    ],
                                    questions: [
                                        { question: "What carries oxygen?", options: ["Red blood cells", "White blood cells", "Platelets"], correct: 0 },
                                        { question: "One circuit of the body takes about...?", options: ["60 seconds", "10 minutes", "1 hour"], correct: 0 }
                                    ]
                                },
                                instruction: "Your circulatory system is your body's high-speed delivery service! 🚚❤️"
                            },
                            {
                                id: "s3l3-5",
                                title: "Body Systems Master Quiz!",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "What helps your blood to clot?", options: ["Plasma", "Platelets", "Veins"], correct: 1 },
                                    { question: "Smooth muscles are...?", options: ["Controlled by you", "Automatic (like stomach)"], correct: 1 },
                                    { question: "Why exercise?", options: ["Makes heart weaker", "Makes heart stronger"], correct: 1 }
                                ],
                                instruction: "Human Body Expert! You know how your amazing machines work together! 🔬🫀🏆"
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: "Light and Shadow",
                        difficulty: "Hard",
                        lessons: [
                            {
                                id: "s3l4-1",
                                title: "Let There Be Light!",
                                type: "sort",
                                content: {
                                    categories: ["Luminous (Makes Light)", "Non-Luminous (Reflects)"],
                                    items: [
                                        { name: "The Sun", cat: "Luminous (Makes Light)" },
                                        { name: "The Moon", cat: "Non-Luminous (Reflects)" },
                                        { name: "A Candle", cat: "Luminous (Makes Light)" },
                                        { name: "A Mirror", cat: "Non-Luminous (Reflects)" },
                                        { name: "A Firefly", cat: "Luminous (Makes Light)" },
                                        { name: "Your Eyes", cat: "Non-Luminous (Reflects)" }
                                    ]
                                },
                                instruction: "Light travels at 300,000 km per second! ⚡"
                            },
                            {
                                id: "s3l4-2",
                                title: "Your Shadow Friend!",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "When is your shadow SHORTEST?", options: ["Morning", "Midday", "Evening"], correct: 1 },
                                    { question: "Move object CLOSER to light?", options: ["Shadow gets bigger", "Shadow gets smaller"], correct: 0 },
                                    { question: "Transparent objects form...?", options: ["Dark shadows", "No shadows"], correct: 1 }
                                ],
                                instruction: "Shadows form when opaque objects block light's straight path! 👤"
                            },
                            {
                                id: "s3l4-3",
                                title: "Mirror, Mirror!",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Reflection is light...?", options: ["Bending", "Bouncing", "Splitting"], correct: 1 },
                                    { question: "Which surface reflects best?", options: ["Polished Metal", "Wood", "Cloth"], correct: 0 },
                                    { question: "What allows you to see around corners?", options: ["Telescope", "Periscope", "Microscope"], correct: 1 }
                                ],
                                instruction: "Reflection happens when light bounces off a smooth surface! 🪞"
                            },
                            {
                                id: "s3l4-4",
                                title: "Bending Light!",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "REFRACTION is light bending as it enters water or glass. 🥤", emoji: "💎" },
                                        { text: "White light is actually 7 colours: ROY G BIV! 🌈", emoji: "🎨" },
                                        { text: "A RAINBOW is made when raindrops act like tiny prisms. 🌧️", emoji: "🌈" }
                                    ],
                                    questions: [
                                        { question: "What is light bending called?", options: ["Reflection", "Refraction", "Reaction"], correct: 1 },
                                        { question: "What does a prism do?", options: ["Makes light hotter", "Splits white light into colours"], correct: 1 }
                                    ]
                                },
                                instruction: "Light can bend, bounce, and split into a beautiful rainbow! 🌈✨"
                            },
                            {
                                id: "s3l4-5",
                                title: "Light Lab Complete Quiz!",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Light travels in...?", options: ["Curvy lines", "Straight lines", "Zig-zags"], correct: 1 },
                                    { question: "Black objects...?", options: ["Reflect all light", "Absorb all light", "Make light"], correct: 1 },
                                    { question: "Sunlight takes how long to reach Earth?", options: ["1 second", "8 minutes", "1 hour"], correct: 1 }
                                ],
                                instruction: "Light Lab Mastered! You see the world in a whole new brightness! 💡🌈🏆"
                            }
                        ]
                    },
                    {
                        id: 5,
                        name: "Sound",
                        difficulty: "Hard",
                        lessons: [
                            {
                                id: "s3l5-1",
                                title: "Vibrations Everywhere!",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "SOUND is caused by tiny back-and-forth moves called VIBRATIONS. 🎵", emoji: "🔊" },
                                        { text: "Sound needs AIR, WATER or SOLID to travel through. 💨", emoji: "🌊" },
                                        { text: "In space, there is no air, so it is perfectly silent! 🚀", emoji: "🤫" }
                                    ],
                                    questions: [
                                        { question: "What causes sound?", options: ["Wind", "Vibrations", "Electricity"], correct: 1 },
                                        { question: "Can sound travel in space?", options: ["Yes", "No"], correct: 1 }
                                    ]
                                },
                                instruction: "Close your eyes and listen — every sound is a vibration! 👂🎵"
                            },
                            {
                                id: "s3l5-2",
                                title: "Turn It Up... or Down!",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Loudness is measured in...?", options: ["Inches", "Decibels (dB)", "Kilograms"], correct: 1 },
                                    { question: "Harmful noise begins at... ...85-100 dB", options: ["20 dB", "85-100 dB", "200 dB"], correct: 1 },
                                    { question: "Distance makes sound...?", options: ["Louder", "Quieter"], correct: 1 }
                                ],
                                instruction: "Protect your ears! Harmful noise (85dB+) is like a loud lawnmower or rock concert. 👂🛡️"
                            },
                            {
                                id: "s3l5-3",
                                title: "High Notes and Low Notes!",
                                type: "matching",
                                content: {
                                    pairs: [
                                        { left: "Mouse Squeak", right: "High Pitch" },
                                        { left: "Elephant Rumble", right: "Low Pitch" },
                                        { left: "Short/Thin String", right: "High Pitch" },
                                        { left: "Long/Thick String", right: "Low Pitch" }
                                    ]
                                },
                                instruction: "PITCH is how high or low a sound is. Higher frequency = higher pitch! 🎼"
                            },
                            {
                                id: "s3l5-4",
                                title: "Echo! Echo! Echo!",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "What is an echo?", options: ["Sound bouncing back", "Sound disappearing", "Sound bending"], correct: 0 },
                                    { question: "Which animal uses echolocation?", options: ["Lion", "Bat", "Snake"], correct: 1 },
                                    { question: "Soft materials ___ sound.", options: ["Reflect", "Absorb (make it quiet)"], correct: 1 }
                                ],
                                instruction: "Echos are like reflections for your ears! 🏔️🦇"
                            },
                            {
                                id: "s3l5-5",
                                title: "Science Lab Grade 3 Finale!",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Sound travels FASTEST through...?", options: ["Air", "Water", "Solids (like a desk)"], correct: 2 },
                                    { question: "A dripping tap wastes how much water?", options: ["1 litre", "15 litres a day", "50 litres"], correct: 1 },
                                    { question: "Science explains...?", options: ["Only school", "Everything around you!"], correct: 1 }
                                ],
                                instruction: "Junior Scientist Certified! You understand the rules of the universe! 👨‍🔬🔬🏆"
                            }
                        ]
                    }
                ]
            },
            {
                id: "good-me",
                name: "Good Me",
                emoji: "🌈",
                color: "var(--kid-pink)",
                icon: "🌈",
                isLifeSkills: true,
                description: "Responsibility, Respect and Readiness for the World!",
                levels: [
                    {
                        id: 1,
                        name: "Taking Care of My Things",
                        difficulty: "Easy",
                        lessons: [
                            {
                                id: "g3l1-1",
                                title: "Responsibility = Freedom! 🗝️",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "Mia always lost her school bag. Every morning was chaos — she was late and stressed. 😓", emoji: "🎒" },
                                        { text: "Her friend Leo packed his bag each evening. Leo was calm and had time for breakfast! 😊", emoji: "🥣" },
                                        { text: "Responsibility isn't just about being 'good' — it makes YOUR life easier and better! 🌟", emoji: "🗝️" }
                                    ],
                                    questions: [
                                        { question: "What happened because Mia was irresponsible?", options: ["She was calm", "Stress and trouble", "She won a prize"], correct: 1 },
                                        { question: "Is being responsible mainly for you or others?", options: ["It helps YOU most!", "Only for teachers"], correct: 0 }
                                    ]
                                },
                                instruction: "Responsible people are trusted with MORE — that's how leaders are made! 🏆"
                            },
                            {
                                id: "g3l1-2",
                                title: "Organising My School Bag",
                                type: "drag_order",
                                content: {
                                    items: ["Empty bag completely", "Check timetable", "Pack books & homework", "Add water & snack", "Place by door"],
                                    correctOrder: ["Empty bag completely", "Check timetable", "Pack books & homework", "Add water & snack", "Place by door"]
                                },
                                instruction: "Packed bag at night = 10 minutes less stress in the morning! ⏰"
                            },
                            {
                                id: "g3l1-3",
                                title: "Borrowing and Returning",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "You break a borrowed ruler. What do you do?", options: ["Hide it", "Apologise and offer to replace it", "Return it quietly"], correct: 1 },
                                    { question: "When should you return a library book?", options: ["Immediately when due", "When you feel like it"], correct: 0 },
                                    { question: "Return borrowed things in...?", options: ["Worse condition", "Same or better condition"], correct: 1 }
                                ],
                                instruction: "How you treat borrowed things shows your true character! 🤝"
                            },
                            {
                                id: "g3l1-4",
                                title: "Keeping Spaces Clean and Organised",
                                type: "sort",
                                content: {
                                    categories: ["Responsible", "Needs Improvement"],
                                    items: [
                                        { name: "Putting books back", cat: "Responsible" },
                                        { name: "Leaving dishes on desk", cat: "Needs Improvement" },
                                        { name: "Making your bed", cat: "Responsible" },
                                        { name: "Wet towel on floor", cat: "Needs Improvement" }
                                    ]
                                },
                                instruction: "A tidy environment reduces anxiety and improves focus! 🧠✨"
                            },
                            {
                                id: "g3l1-5",
                                title: "Responsibility Champion Quiz",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "You forgot homework. You say...?", options: ["Tell the truth and apologise", "Lie"], correct: 0 },
                                    { question: "See a school tap running?", options: ["Walk past", "Turn it off"], correct: 1 },
                                    { question: "Late for a meeting with a friend?", options: ["Send a message to let them know", "Just arrive whenever"], correct: 0 }
                                ],
                                instruction: "Responsibility Champion! You are building a great reputation every day! 🏆🌟"
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Being Honest",
                        difficulty: "Medium",
                        lessons: [
                            {
                                id: "g3l2-1",
                                title: "The Truth Has Power! ⚡",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "Ayan the shepherd boy cried 'WOLF!' when there was no wolf. Twice! 🐺", emoji: "🤥" },
                                        { text: "When a real wolf came, no one believed him. The wolf ate the sheep. 😢", emoji: "🐾" },
                                        { text: "A reputation for honesty takes years to build and seconds to destroy. 🏚️", emoji: "🔑" }
                                    ],
                                    questions: [
                                        { question: "Why didn't the villagers believe Ayan?", options: ["He was too quiet", "He had lied before", "They were busy"], correct: 1 },
                                        { question: "What is the most valuable thing you give people?", options: ["Money", "Your trust/word", "Toys"], correct: 1 }
                                    ]
                                },
                                instruction: "The immediate conversation is hard. The trust you build is permanent! ⚡"
                            },
                            {
                                id: "g3l2-2",
                                title: "Lies vs. Surprises vs. Kind Truths",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Hiding a surprise party is...?", options: ["A bad lie", "A kind secret"], correct: 1 },
                                    { question: "You don't like a friend's drawing. You say...?", options: ["'It's the worst!'", "'I really like the colours you used!'"], correct: 1 },
                                    { question: "Lying to avoid trouble is...?", options: ["Smart", "Wrong and breaks trust"], correct: 1 }
                                ],
                                instruction: "Tact is finding something TRUE and KIND to say! 💛"
                            },
                            {
                                id: "g3l2-3",
                                title: "Honest When It's Hard! 💪",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Broke mum's vase while playing? You...", options: ["Hide pieces", "Tell mum immediately and say sorry"], correct: 1 },
                                    { question: "Friend's presentation has a mistake. You tell her...?", options: ["Yes, kindly before she starts", "No, let her fail"], correct: 0 },
                                    { question: "Cheated on a game but no one saw?", options: ["Doesn't matter", "It matters — you know!"], correct: 1 }
                                ],
                                instruction: "Integrity is doing the right thing when NO ONE is watching! 👁️"
                            },
                            {
                                id: "g3l2-4",
                                title: "Honest in Every Context! 🌍",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Forgot homework. Tell teacher...?", options: ["Exactly what happened", "A creative lie"], correct: 0 },
                                    { question: "Find a wallet with money. Do you...?", options: ["Keep it", "Hand it to a responsible adult"], correct: 1 },
                                    { question: "Sibling gets blamed for your mistake?", options: ["Stay quiet", "Speak up and take responsibility"], correct: 1 }
                                ],
                                instruction: "Choose honesty always. It will never let you down! 💛"
                            },
                            {
                                id: "g3l2-5",
                                title: "Honesty Champion Quiz",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Who feels better after the truth?", options: ["Only you", "Everyone involved"], correct: 1 },
                                    { question: "Does a 'half-truth' count as honesty?", options: ["Yes", "No"], correct: 1 }
                                ],
                                instruction: "Honesty Ninja! Your reputation is your greatest treasure! ⚡🥷🏆"
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Road Safety Rules",
                        difficulty: "Medium",
                        lessons: [
                            {
                                id: "g3l3-1",
                                title: "The Green Cross Code 🚦",
                                type: "drag_order",
                                content: {
                                    items: ["Find a safe place", "Stop at the kerb", "Look right, left, right", "Listen for engines", "Walk straight across"],
                                    correctOrder: ["Find a safe place", "Stop at the kerb", "Look right, left, right", "Listen for engines", "Walk straight across"]
                                },
                                instruction: "Electric vehicles are very quiet — listen extra carefully! 👂⚡"
                            },
                            {
                                id: "g3l3-2",
                                title: "Traffic Light Expert! 🚦",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Red man means...?", options: ["Wait", "Cross quickly"], correct: 0 },
                                    { question: "Green man means...?", options: ["Cross blindly", "Cross but still look/listen"], correct: 1 },
                                    { question: "A 'Zebra' crossing means...?", options: ["Cars must stop", "Zebras cross here"], correct: 0 }
                                ],
                                instruction: "Even at a green light, YOUR safety is YOUR responsibility! 🛡️"
                            },
                            {
                                id: "g3l3-3",
                                title: "Road Smart! 🚗",
                                type: "sort",
                                content: {
                                    categories: ["Road Safe", "Not Safe"],
                                    items: [
                                        { name: "Walking on pavement", cat: "Road Safe" },
                                        { name: "Phone away near roads", cat: "Road Safe" },
                                        { name: "Wearing helmet on bike", cat: "Road Safe" },
                                        { name: "Darting between cars", cat: "Not Safe" },
                                        { name: "Headphones while cycling", cat: "Not Safe" }
                                    ]
                                },
                                instruction: "Be Bright, Be Seen! Wear reflective gear at night. 🦺✨"
                            },
                            {
                                id: "g3l3-4",
                                title: "Phones and Roads Don't Mix! 📵",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Get a text near a busy road. You...?", options: ["Read while walking", "Stop in a safe place first"], correct: 1 },
                                    { question: "Ball rolls into road. You...?", options: ["Run after it", "Stop at kerb and wait for clear"], correct: 1 },
                                    { question: "Driver checks phone for 2 seconds. Travelled?", options: ["1 metre", "27 metres (at 30mph)"], correct: 1 }
                                ],
                                instruction: "No notification or ball is worth your life. 📵🛡️"
                            },
                            {
                                id: "g3l3-5",
                                title: "Road Safety Champion Quiz",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Cars can always see you?", options: ["Yes", "No (especially between parked cars)"], correct: 1 },
                                    { question: "Is a 'Toucan' crossing for birds?", options: ["No (it's for Two-can: cyclists and walkers)", "Yes"], correct: 0 },
                                    { question: "A 'Pegasus' crossing is for...?", options: ["Horses 🐴", "Airplanes ✈️"], correct: 0 }
                                ],
                                instruction: "Road Safety Master! You are ready to navigate the world safely! 🚦🏆"
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: "Screen Time and Digital Manners",
                        difficulty: "Medium",
                        lessons: [
                            {
                                id: "g3l4-1",
                                title: "Screens Are Tools, Not Life! 📱",
                                type: "sort",
                                content: {
                                    categories: ["Healthy Use", "Unhealthy Use"],
                                    items: [
                                        { name: "Educational video", cat: "Healthy Use" },
                                        { name: "Video call with Gran", cat: "Healthy Use" },
                                        { name: "Screens 1hr before bed", cat: "Unhealthy Use" },
                                        { name: "3 hours gaming at night", cat: "Unhealthy Use" }
                                    ]
                                },
                                instruction: "Screens release dopamine — it can be hard to stop! 🧠"
                            },
                            {
                                id: "g3l4-2",
                                title: "Stay Safe Online! 🛡️",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Online friend wants to meet up. You...?", options: ["Go alone", "Tell a trusted adult immediately"], correct: 1 },
                                    { question: "Link asks for your home address?", options: ["Give it for the gift", "Never/Tell a parent"], correct: 1 },
                                    { question: "Passwords should be...?", options: ["Shared with friends", "Private (only parents/carers)"], correct: 1 }
                                ],
                                instruction: "Keep personal info safe — online, anyone can be anyone! 🔐"
                            },
                            {
                                id: "g3l4-3",
                                title: "The Golden Rule Online! 💻",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "If you wouldn't say it to someone's face — don't type it! 💬", emoji: "⌨️" },
                                        { text: "Zara sent an angry message. Someone screenshotted it. Now everyone has seen it. 😳", emoji: "📸" },
                                        { text: "Nothing online is truly private. A screenshot lasts forever! 📸", emoji: "🛡️" }
                                    ],
                                    questions: [
                                        { question: "What is cyberbullying?", options: ["Exclude someone from group chat", "Helping someone"], correct: 0 },
                                        { question: "If you see cyberbullying, should you 'like' it?", options: ["No", "Yes"], correct: 0 }
                                    ]
                                },
                                instruction: "Treat people online exactly as you'd treat them face-to-face! 💛"
                            },
                            {
                                id: "g3l4-4",
                                title: "Think Before You Share! 🔍",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Is everything online true?", options: ["Yes", "No (anyone can publish anything)"], correct: 1 },
                                    { question: "How to spot fake news?", options: ["Check the source", "Believe shocking headlines"], correct: 0 },
                                    { question: "Message says 'Share or bad luck!' Do you?", options: ["Share to be safe", "Delete and ignore"], correct: 1 }
                                ],
                                instruction: "Is it TRUE? Is it KIND? Is it NECESSARY? If not — don't share! 🛑"
                            },
                            {
                                id: "g3l4-5",
                                title: "Digital Wellbeing Champion Quiz",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Screens before bed disrupt what?", options: ["Appetite", "Sleep (Blue light)"], correct: 1 },
                                    { question: "If someone upsets you online, you...?", options: ["Be mean back", "Tell a trusted adult"], correct: 1 }
                                ],
                                instruction: "Digital Citizen Master! You use technology as a safe and wise tool! 💻🏆"
                            }
                        ]
                    },
                    {
                        id: 5,
                        name: "Helping at Home",
                        difficulty: "Easy",
                        lessons: [
                            {
                                id: "g3l5-1",
                                title: "We're a Team! 🤝",
                                type: "story_read",
                                content: {
                                    panels: [
                                        { text: "In the Sharma house, everyone helps. Dinner is on time and everyone is relaxed! 💛", emoji: "🏘️" },
                                        { text: "In the Khan house, only mum does everything. She is exhausted and stressed. 😓", emoji: "🧹" },
                                        { text: "Helping isn't a punishment — it's how we show we care! 🤝", emoji: " FAMILY" }
                                    ],
                                    questions: [
                                        { question: "Why help parents?", options: ["They get tired too", "I want more money"], correct: 0 },
                                        { question: "Which home is more fun?", options: ["The one where only one person works", "The team-work home"], correct: 1 }
                                    ]
                                },
                                instruction: "Helping builds gratitude and makes the whole family happier! 🤝"
                            },
                            {
                                id: "g3l5-2",
                                title: "Win the Morning, Win the Day! ☀️",
                                type: "drag_order",
                                content: {
                                    items: ["Wake up with alarm", "Make bed (2 mins)", "Brush teeth & dress", "Eat healthy breakfast", "Pack bag & leave"],
                                    correctOrder: ["Wake up with alarm", "Make bed (2 mins)", "Brush teeth & dress", "Eat healthy breakfast", "Pack bag & leave"]
                                },
                                instruction: "Making your bed sets a positive tone for your entire day! 🛏️✨"
                            },
                            {
                                id: "g3l5-3",
                                title: "Evening Responsibilities 🌙",
                                type: "sort",
                                content: {
                                    categories: ["My Responsibility", "Everyone Helps"],
                                    items: [
                                        { name: "Homework before screens", cat: "My Responsibility" },
                                        { name: "Setting the table", cat: "Everyone Helps" },
                                        { name: "Putting laundry in basket", cat: "My Responsibility" },
                                        { name: "Clearing dishes", cat: "Everyone Helps" }
                                    ]
                                },
                                instruction: "Small evening tasks make for a MUCH easier morning! 🌙"
                            },
                            {
                                id: "g3l5-4",
                                title: "Enough for Everyone! 🌍",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Dripping tap wastes how much daily?", options: ["1 litre", "15 litres a day"], correct: 1 },
                                    { question: "Food full but leftovers on plate?", options: ["Throw them away", "Save for later"], correct: 1 },
                                    { question: "Brushing teeth with tap ON wastes...?", options: ["6 litres per minute", "1 litre per day"], correct: 0 }
                                ],
                                instruction: "Helping at home also means helping our PLANET! 🌍♻️"
                            },
                            {
                                id: "g3l5-5",
                                title: "I Am Responsible! 🌟",
                                type: "quiz",
                                multi: true,
                                questions: [
                                    { question: "Accidentally broke something?", options: ["Tell parents honestly", "Hide it"], correct: 0 },
                                    { question: "Mean comment online?", options: ["Screenshot, tell adult, block", "Reply back"], correct: 0 },
                                    { question: "Mealtime and parents are tired?", options: ["Offer to help clear up", "Go play games"], correct: 0 }
                                ],
                                instruction: "Discovery Champion Diploma UNLOCKED! You are a responsible, kind, and safe legend! 🌈🏆🎓"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    { id: 4, name: "Grade 4", emoji: "🚀", color: "var(--kid-purple)", tagline: "Knowledge for 9–10 year olds", subjects: [] },
    { id: 5, name: "Grade 5", emoji: "🏆", color: "var(--kid-pink)", tagline: "Skills for 10–11 year olds", subjects: [] }
];
