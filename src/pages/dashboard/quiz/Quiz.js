import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import "./Quiz.css"
import axios from "axios";
import {URL} from "../../../URL";

export default function () {

    const Questions = [{
        id: 0,
        q: "Apa itu Binary Search Tree (BST)?",
        a: [{text: "Algoritma sorting data", isCorrect: false, id: "0-1"}, {
            text: "Struktur data yang mirip dengan array",
            isCorrect: false,
            id: "0-2"
        }, {
            text: "Struktur data yang terdiri dari node-node yang memiliki nilai dan referensi ke node lain",
            isCorrect: true, id: "0-3"
        }, {text: "Semua jawaban salah", isCorrect: false, id: "0-4"}]
    }, {
        id: 1,
        q: "Pada BST, nilai dari setiap node yang berada di sub-pohon kiri harus lebih kecil dari nilai node induk, dan nilai setiap node yang berada di sub-pohon kanan harus lebih besar dari nilai node induk. Hal ini dikenal sebagai:",
        a: [{
            text: "Prinsip In-order traversal",
            isCorrect: false,
            id: "1-1"

        }, {text: "Prinsip Post-order traversal", isCorrect: false, id: "1-2"}, {
            text: "Prinsip Pre-order traversal",
            isCorrect: false,
            id: "1-3"
        }, {text: "Prinsip Binary Search Tree", isCorrect: true, id: "1-4"}]
    }, {
        id: 2,
        q: "Operasi yang dapat dilakukan pada BST adalah:",
        a: [{text: "Insert, delete, dan search", isCorrect: true, id: "2-1"}, {
            text: "Insert dan delete saja",
            isCorrect: false, id: "2-2"
        }, {text: "Search saja", isCorrect: false, id: "2-3"}, {
            text: "Semua jawaban salah",
            isCorrect: false,
            id: "2-4"
        },]
    }, {
        id: 3,
        q: "Apa keuntungan menggunakan BST dibandingkan dengan linked list?",
        a: [{text: "Pencarian data lebih cepat", isCorrect: true, id: "3-1"}, {
            text: "Menghemat memori",
            isCorrect: false, id: "3-2"
        }, {text: "Tidak ada keuntungan", isCorrect: false, id: "3-3"}, {
            text: "Keduanya benar",
            isCorrect: false,
            id: "3-4"
        },]
    }, {
        id: 4, q: "Jika kita ingin menghapus node pada BST yang memiliki dua anak, apa yang harus dilakukan?", a: [{
            text: "Hapus node dan ganti dengan nilai terkecil dari sub-pohon kanan", isCorrect: true, id: "4-1"
        }, {
            text: "Hapus node dan ganti dengan nilai terbesar dari sub-pohon kiri",
            isCorrect: false, id: "4-2"
        }, {
            text: "Hapus node dan ganti dengan nilai terbesar dari sub-pohon kanan",
            isCorrect: false, id: "4-3"
        }, {text: "Hapus node dan ganti dengan nilai terkecil dari sub-pohon kiri", isCorrect: false, id: "4-4"},]
    }, {
        id: 5,
        q: "Algoritma yang digunakan untuk mencari node dengan nilai tertentu pada BST adalah:",
        a: [{text: "In-order traversal", isCorrect: false, id: "5-1"}, {
            text: "Post-order traversal",
            isCorrect: false, id: "5-2"
        }, {text: "Pre-order traversal", isCorrect: false, id: "5-3"}, {
            text: "Binary Search",
            isCorrect: true,
            id: "5-4"
        },]
    }, {
        id: 6, q: "Jika kita ingin menghapus node pada BST yang tidak memiliki anak, apa yang harus dilakukan?", a: [{
            text: "Hapus node dan ganti dengan nilai terkecil dari sub-pohon kanan", isCorrect: false, id: "6-1"
        }, {
            text: "Hapus node dan ganti dengan nilai terbesar dari sub-pohon kiri",
            isCorrect: false, id: "6-2"
        }, {
            text: "Hapus node dan ganti dengan null",
            isCorrect: true, id: "6-3"
        }, {text: "Hapus node dan ganti dengan nilai terbesar dari sub-pohon kanan", isCorrect: false, id: "6-4"},]
    }, {
        id: 7,
        q: "Jika kita ingin menambahkan node baru pada BST, di mana tempat yang tepat untuk menambahkannya?",
        a: [{
            text: "Di bagian kiri node induk",
            isCorrect: false, id: "7-1"

        }, {text: "Di bagian kanan node induk", isCorrect: false, id: "7-2"}, {
            text: "Tergantung pada nilai node baru",
            isCorrect: true, id: "7-3"
        }, {text: "Semua jawaban salah", isCorrect: false, id: "7-4"},]
    }, {
        id: 8,
        q: "Jika kita ingin mencari nilai maksimum pada BST, di mana node terakhir yang kita kunjungi?",
        a: [{text: "Node paling kiri", isCorrect: false, id: "8-1"}, {
            text: "Node paling kanan",
            isCorrect: true, id: "8-2"
        }, {text: "Node dengan nilai tertinggi", isCorrect: false, id: "8-3"}, {
            text: "Node dengan nilai terendah",
            isCorrect: false, id: "8-4"
        },]
    }, {
        id: 9,
        q: "Jika kita ingin mencari nilai minimum pada BST, di mana node terakhir yang kita kunjungi?",
        a: [{text: "Node paling kiri", isCorrect: true, id: "9-1"}, {
            text: "Node paling kanan",
            isCorrect: false, id: "9-2"
        }, {text: "Node dengan nilai tertinggi", isCorrect: false, id: "9-3"}, {
            text: "Node dengan nilai terendah",
            isCorrect: false, id: "9-4"
        },]
    }, {
        id: 10, q: "Jika kita ingin menghapus node pada BST yang memiliki satu anak, apa yang harus dilakukan?", a: [{
            text: "Hapus node dan ganti dengan nilai terkecil dari sub-pohon kanan", isCorrect: false, id: "10-1"
        }, {
            text: "Hapus node dan ganti dengan nilai terbesar dari sub-pohon kiri",
            isCorrect: false, id: "10-2"
        }, {
            text: "Hapus node dan ganti dengan nilai anaknya",
            isCorrect: true, id: "10-3"
        }, {text: "Hapus node dan ganti dengan null", isCorrect: false, id: "10-4"},]
    }, {
        id: 11,
        q: "Pada BST, nilai yang lebih kecil dari parent node akan disimpan pada bagian mana dari pohon?",
        a: [{text: "Bagian kanan", isCorrect: false, id: "11-1"}, {
            text: "Bagian kiri",
            isCorrect: false, id: "11-2"
        }, {text: "Tidak ada aturan khusus", isCorrect: true, id: "11-3"}, {
            text: "Pada root node",
            isCorrect: false,
            id: "11-4"
        },]
    }, {
        id: 12,
        q: "Pada BST, apa yang terjadi jika kita mencari nilai yang tidak ada dalam pohon?",
        a: [{
            text: "Program akan error",
            isCorrect: false,
            id: "12-1"
        }, {
            text: "Program akan menghasilkan nilai null",
            isCorrect: false,
            id: "12-2"
        }, {
            text: "Program akan terus mencari tanpa henti",
            isCorrect: true, id: "12-3"
        }, {text: "Program akan mengembalikan nilai false", isCorrect: false, id: "12-4"},]
    }, {
        id: 13,
        q: "Pada BST, apakah mungkin terdapat lebih dari satu node dengan nilai yang sama?",
        a: [{text: "Ya", isCorrect: true, id: "13-1"}, {text: "Tidak", isCorrect: false, id: "13-2"}, {
            text: "Bisa Jadi",
            isCorrect: false, id: "13-3"
        }, {text: "Tidak Diketahui", isCorrect: false, id: "13-4"},]
    }, {
        id: 14,
        q: "Pada BST, apakah setiap sub-pohon juga merupakan BST?\n",
        a: [{text: "Ya", isCorrect: true, id: "14-1"}, {text: "Tidak", isCorrect: false, id: "14-2"}, {
            text: "Bisa Jadi",
            isCorrect: false,
            id: "14-3"
        }, {text: "Tidak Diketahui", isCorrect: false, id: "14-4"},]
    },]

    const [score, setScore] = useState(0)
    const [listQuiz, setListQuiz] = useState([])

    React.useEffect(() => {

        axios.get(`${URL}/api/list-quiz`)
            .then((result) => {
                console.log('Success2:', result.data.data)
                setListQuiz(result.data.data)
            })
            .catch((error) => {
                console.error('Error:', error)
            })


        getHistory()

    }, [])

    let [questionState, setQuestionState] = useState(0)

    const idUser = localStorage.getItem("ID")

    function getData() {
        let myScore = 0;
        for (let q = 0; q < listQuiz.length; q++) {
            const ele = document.getElementsByName(`${q}`)
            console.log(ele[q].value)
            console.log(ele[q].checked)

            for (let i = 0; i < ele.length; i++) {
                if(ele[i].value === listQuiz[q].answer && ele[i].checked){
                    myScore += 1
                    setScore(myScore)

                    break
                } else console.log("Not OKE")
            }
        }
        console.log("MyScore " + myScore)

        const data = {
            id_user: idUser,
            score: `${myScore}`,
        }

        axios.post(`${URL}/api/quiz`,
            data,
        ).then((data) => {

        }).catch((error) => {
            console.error('Error:', error.message)


        })
    }

    console.log("Score " + score)

    function setValuePrev(value) {
        value -= 1
        setQuestionState(value)
    }

    const [answer, setAnswer] = useState({})

    function setValueNext(value) {
        value += 1
        setQuestionState(value)

        const ele = document.getElementsByName(`${value - 1}`)
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
                setAnswer({id: value - 1, a: Questions[value - 1].a[i].isCorrect})
            }
        }
    }

    const [quiz, setQuiz] = useState(false)

    function startQuiz() {
        setQuiz(true)
    }

    const renderer = ({minutes, seconds, completed}) => {
        if (completed) {
            // Render a completed state
            return "Completed"
        } else {
            // Render a countdown
            return <span>{minutes}:{seconds}</span>;
        }
    }

    const [history, setHistory] = useState([])

    function getHistory() {
        axios.get(`${URL}/api/quiz/` + idUser,
        ).then((data) => {
            console.log('Success:', data.data.data)
            setHistory(data.data.data)

        }).catch((error) => {
            console.error('Error:', error.message)

        })
    }

    return (<>
        <Sidebar/>
        <main className={"w-3/4 ml-auto my-10"}>
            {/*<SidebarLearn/>*/}
            <h3 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Quiz</h3>

            <button className={`bg-primary p-2 text-white font-bold rounded ${(quiz) ? "hidden" : ""}`}
                    onClick={startQuiz}>Start Quiz
            </button>

            {/*History Quiz*/}
            <div className={`history w-96 ${(quiz) ? "hidden" : ""}`}>
                <h4 className={"font-bold mt-8 text-xl"}>Riwayat</h4>
                <div className="relative mt-2 overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-96 text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead
                            className="w-96 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tanggal
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Score
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {history.map((data) =>
                            <tr className="w-96 bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <>
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {data.createdAt}
                                    </th>
                                    <td className="px-6 py-4">
                                        {data.score}
                                    </td>
                                </>

                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>

            <>
                <div className={`quiz ${(quiz) ? "" : "hidden"}`}>
                    {(quiz) ? listQuiz.map((question, key) =>
                        <>
                            <div className="question-container" id="question">
                                {key + 1}. {question.question}
                            </div>
                            <div className="option-container">
                                <input type="radio" id={question.a + key}
                                       name={key}
                                       value={question.a} className={"w-8"}/>
                                <label
                                    for={question.a + key}> {question.a}</label><br/>
                                <input type="radio" id={question.b + key}
                                       name={key}
                                       value={question.b} className={"w-8"}/>
                                <label
                                    htmlFor={question.b + key}>{question.b}</label><br/>
                                <input type="radio" id={question.c + key}
                                       name={key}
                                       value={question.c} className={"w-8"}/>
                                <label
                                    htmlFor={question.c + key}>{question.c}</label><br/>
                                <input type="radio" id={question.d + key}
                                       name={key}
                                       value={question.d} className={"w-8"}/>
                                <label
                                    htmlFor={question.d + key}>{question.d}</label><br/>
                            </div>
                            <br/>
                        </>
                    ) : ""}
                    <button className="bg-primary p-2 text-white font-bold rounded ml-2"
                            onClick={getData}>Submit
                    </button>
                </div>
                {/* <div className="question-container" id="question">
                        {questionState + 1}. {question.q}
                    </div>
                    <div className="option-container">
                        <input type="radio" id={question.a[0].text}
                               name={question.id}
                               value={question.a[0].text} className={"w-8"}/>
                        <label
                            htmlFor={question.a[0].text}> {question.a[0].text}</label><br/>
                        <input type="radio" id={question.a[1].text}
                               name={question.id}
                               value={question.a[1].text} className={"w-8"}/>
                        <label
                            htmlFor={question.a[1].text}>{question.a[1].text}</label><br/>
                        <input type="radio" id={question.a[2].text}
                               name={question.id}
                               value={question.a[2].text} className={"w-8"}/>
                        <label
                            htmlFor={question.a[2].text}>{question.a[2].text}</label><br/>
                        <input type="radio" id={question.a[3].text}
                               name={question.id}
                               value={question.a[3].text} className={"w-8"}/>
                        <label
                            htmlFor={question.a[3].text}>{question.a[3].text}</label><br/>

                    </div>*/}

                <br/>
                {/*  <div className="navigation">
                        {(questionState === 0) ? "" :
                            <button className="prev bg-primary px-4 py-1 text-white rounded"
                                    onClick={setValuePrev.bind(this, questionState)}>Prev
                            </button>}

                        {(questionState === Questions.length - 1) ? "" :
                            <button className="next bg-primary px-4 py-1 text-white rounded ml-2"
                                    onClick={setValueNext.bind(this, questionState)}>Next
                            </button>}

                        {(questionState !== Questions.length - 1) ? "" :
                            <button className="bg-primary p-2 text-white font-bold rounded ml-2"
                                    onClick={getData}>Submit</button>}

                    </div>*/}

                {/*Submit Quiz*/}

            </>
            {/* )}*/}

        </main>
    </>)
}