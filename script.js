* {
    box-sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;
    font-family: "Trebuchet MS", "Comic Sans MS", sans-serif;
    background: linear-gradient(135deg, #fff4c7, #dff7ff, #ffe5f0);
    color: #333;
}

button {
    font-family: inherit;
    cursor: pointer;
    border: none;
}

header {
    height: 70px;
    background: rgba(255,255,255,.95);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    box-shadow: 0 3px 15px rgba(0,0,0,.1);
    position: sticky;
    top: 0;
    z-index: 20;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

header button {
    background: #fff0a5;
    padding: 10px 18px;
    border-radius: 20px;
    font-weight: bold;
}

.screen {
    display: none;
    min-height: calc(100vh - 70px);
    padding: 35px 5%;
}

.screen.active {
    display: block;
    animation: appear .4s ease;
}

@keyframes appear {
    from {
        opacity: 0;
        transform: translateY(15px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* HOME */

.hero {
    max-width: 1000px;
    margin: 70px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    text-align: center;
}

.hero-girl {
    font-size: 9rem;
    animation: jump 2s infinite;
}

@keyframes jump {
    0%,100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

.hero h1 {
    font-size: clamp(2.3rem, 6vw, 4.5rem);
    margin-bottom: 10px;
}

.hero p {
    font-size: 1.25rem;
}

.big-btn {
    margin-top: 20px;
    background: #ff765c;
    color: white;
    padding: 18px 32px;
    border-radius: 35px;
    font-size: 1.15rem;
    font-weight: bold;
    box-shadow: 0 6px 0 #d9573c;
}

.big-btn:active {
    transform: translateY(5px);
    box-shadow: 0 1px 0 #d9573c;
}

.features {
    max-width: 800px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 18px;
}

.features div {
    background: white;
    padding: 22px;
    text-align: center;
    border-radius: 25px;
    font-size: 2rem;
    box-shadow: 0 7px 18px rgba(0,0,0,.1);
}

/* GAMES */

#activities h2,
#activities .subtitle {
    text-align: center;
}

#activities h2 {
    font-size: 2.4rem;
}

.games {
    max-width: 1050px;
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
}

.game-card {
    min-height: 170px;
    background: white;
    border-radius: 25px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 3rem;
    box-shadow: 0 8px 20px rgba(0,0,0,.1);
    transition: .25s;
}

.game-card:hover {
    transform: translateY(-8px) rotate(1deg);
    box-shadow: 0 15px 25px rgba(0,0,0,.15);
}

.game-card b {
    font-size: 1.05rem;
}

.game-card small {
    font-size: .85rem;
    opacity: .6;
}

/* GAME */

.game-top {
    max-width: 1050px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
}

.game-top button {
    background: white;
    padding: 10px 17px;
    border-radius: 20px;
    font-weight: bold;
}

.score {
    background: white;
    padding: 10px 18px;
    border-radius: 25px;
    font-weight: bold;
}

.instruction {
    max-width: 900px;
    margin: 20px auto;
    background: white;
    padding: 18px;
    border-radius: 25px;
    text-align: center;
    font-size: 1.25rem;
    font-weight: bold;
}

.game-area {
    max-width: 1050px;
    min-height: 480px;
    margin: auto;
    padding: 25px;
    background: rgba(255,255,255,.95);
    border-radius: 35px;
    box-shadow: 0 12px 35px rgba(0,0,0,.1);
    overflow: hidden;
}

.message {
    min-height: 40px;
    margin-top: 15px;
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
}

/* OBJECTS */

.objects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
    min-height: 160px;
}

.object {
    font-size: 3.3rem;
    cursor: pointer;
    user-select: none;
    touch-action: none;
    transition: .2s;
}

.object:hover {
    transform: scale(1.2) rotate(5deg);
}

.object.dragging {
    opacity: .5;
}

/* BASKET */

.basket {
    width: 210px;
    min-height: 140px;
    margin: 25px auto;
    border: 5px dashed #c58b55;
    border-radius: 25px;
    background: #ffe5bd;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5px;
    transition: .3s;
}

.basket.over {
    transform: scale(1.08);
    background: #fff0cf;
}

/* ANIMATION */

.collect {
    animation: collect .45s forwards;
}

@keyframes collect {
    50% {
        transform: scale(1.5) rotate(15deg);
    }

    100% {
        transform: scale(0);
        opacity: 0;
    }
}

/* BALLOONS */

.balloon-area {
    min-height: 370px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 25px;
}

.balloon {
    font-size: 4rem;
    cursor: pointer;
    animation: float 1.8s infinite ease-in-out;
}

@keyframes float {
    0%,100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-18px);
    }
}

.pop {
    animation: pop .3s forwards !important;
}

@keyframes pop {
    to {
        transform: scale(2);
        opacity: 0;
    }
}

/* GROUPS */

.groups {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 30px 0;
}

.group {
    width: 190px;
    min-height: 160px;
    padding: 15px;
    border: 4px dashed #927ee8;
    border-radius: 25px;
    background: #f2efff;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    gap: 5px;
}

.group-title {
    width: 100%;
    text-align: center;
    font-weight: bold;
    margin-bottom: 8px;
}

/* NUMBER LINE */

.number-line {
    position: relative;
    height: 8px;
    background: #444;
    margin: 130px auto 80px;
    max-width: 900px;
}

.number {
    position: absolute;
    top: -30px;
    transform: translateX(-50%);
    background: transparent;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 5px;
}

.number::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 30px;
    background: #444;
    top: 30px;
    left: 50%;
}

.walker {
    position: absolute;
    top: -100px;
    font-size: 4rem;
    transform: translateX(-50%);
    transition: left .8s ease;
}

/* FISHING */

.fishing {
    position: relative;
    min-height: 420px;
    border-radius: 25px;
    overflow: hidden;
    background: linear-gradient(#c7f5ff 55%, #52b9d0 55%);
}

.fish {
    position: absolute;
    font-size: 2.8rem;
    cursor: pointer;
    transition: .3s;
}

.fish:hover {
    transform: scale(1.2);
}

/* PATTERN */

.pattern {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    margin: 80px 0 40px;
}

.pattern-item {
    width: 80px;
    height: 70px;
    background: #fff0a8;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
}

.options {
    display: flex;
    justify-content: center;
    gap: 15px;
}

.options button {
    padding: 18px 25px;
    border-radius: 20px;
    background: #e4d8ff;
    font-size: 2rem;
}

/* SORTING */

.sorting {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

.sort-box {
    width: 230px;
    min-height: 200px;
    border: 4px dashed #777;
    border-radius: 25px;
    background: #f7f7f7;
    padding: 15px;
    text-align: center;
}

.sort-box h3 {
    margin-top: 0;
}

.sort-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
}

/* BLOCKS */

.block-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
}

.block-stack {
    min-height: 190px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
    gap: 5px;
}

.block {
    width: 45px;
    height: 45px;
    background: #ff9b72;
    border: 3px solid #d76544;
    border-radius: 8px;
    animation: blockIn .25s;
}

@keyframes blockIn {
    from {
        transform: translateY(-25px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* POPUP */

.popup {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.45);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 100;
}

.popup.show {
    display: flex;
}

.popup-box {
    background: white;
    padding: 40px;
    border-radius: 35px;
    text-align: center;
    animation: popupIn .4s;
}

.big-emoji {
    font-size: 6rem;
    animation: jump 1s infinite;
}

.popup-box button {
    margin-top: 20px;
    background: #ffd166;
    padding: 14px 25px;
    border-radius: 25px;
    font-weight: bold;
}

@keyframes popupIn {
    from {
        transform: scale(.5);
    }

    to {
        transform: scale(1);
    }
}

/* MOBILE */

@media(max-width:800px) {

    .hero {
        flex-direction: column;
        margin-top: 40px;
    }

    .hero-girl {
        font-size: 6rem;
    }

    .features {
        grid-template-columns: repeat(2,1fr);
    }

    .games {
        grid-template-columns: repeat(2,1fr);
    }

    .game-top {
        flex-wrap: wrap;
        justify-content: center;
    }
}

@media(max-width:500px) {

    .games {
        grid-template-columns: 1fr;
    }

    .features {
        grid-template-columns: 1fr 1fr;
    }

    .game-area {
        padding: 15px;
    }

    .object {
        font-size: 2.7rem;
    }
}
