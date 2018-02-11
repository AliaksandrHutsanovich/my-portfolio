//function that extends one prototype from other

function extend(Child, Parent) {
    Child.prototype=Object.create(Parent.prototype);
    Child.prototype.constructor=Child;
    Child.superclass=Parent.prototype;
}

//function-constructor for the main part of menu (blue background)

function Menu() {
    this.frame=document.createElement("div"); 
    this.frame.style.width="1300px";
    this.frame.style.height="530px";
    this.frame.style.backgroundColor="rgba(72, 118, 255, 0.5)";
}

// function is handler click event for cards
var memoryFirstCardTarget; //two variables for collaboration between first and second cards
var memoryFirstCard;

var memorySecondCardTarget;
var memorySecondCard;


var clickCard=function(e, param) {
    let currentAngle=0;
    let currentAngleTurning=180;
    let opacity=1;

    //function for turning every card when the push has been
        if (!Card.kindCard_1) {
            Card.kindCard_1=this.faceCard;
            memoryFirstCardTarget=e.target;
            memoryFirstCard=this;
            const intervalid=setInterval(()=>{
                currentAngle+=3.6;
                this.style.transform=`rotateX(${currentAngle}deg)`;
                if (currentAngle>89 && currentAngle<=90) {
                    e.target.style.opacity=0;
                }
                if (currentAngle>176.6) {
                    currentAngle=0;
                    clearInterval(intervalid);
                }
            }, 20);
        }
        else if (!Card.kindCard_2 && e.target!=memoryFirstCardTarget) {
            Card.kindCard_2=this.faceCard;
            if (Card.kindCard_1==Card.kindCard_2) {
                Card.numCalledCards++;
            }
            memorySecondCardTarget=e.target;
            memorySecondCard=this;
            const intervalid=setInterval(()=>{
                if (currentAngle<179)
                    currentAngle+=3.6;
                this.style.transform=`rotateX(${currentAngle}deg)`;
                if (currentAngle>89 && currentAngle<=90) {
                    e.target.style.opacity=0;
                }
                if (currentAngle>179 && currentAngle<=180) {
                    if (Card.kindCard_1==Card.kindCard_2) {
                        opacity-=0.02;
                        memoryFirstCard.style.opacity=`${opacity}`;
                        this.style.opacity=`${opacity}`;
                        if (opacity<=0) {
                            memoryFirstCard.removeEventListener("click", clickCard);
                            this.removeEventListener("click", clickCard);
                            console.log("Card.num_called_cards="+Card.numCalledCards);
                            Card.kindCard_1="";
                            Card.kindCard_2="";
                            currentAngle=0;
                            opacity=1;
                            clearTimeout(intervalid);
                        }
                    }
                    else {
                        currentAngleTurning-=3.6;
                        this.style.transform=`rotateX(${currentAngleTurning}deg)`;
                        memoryFirstCard.style.transform=`rotateX(${currentAngleTurning}deg)`;
                        if (currentAngleTurning>90 && currentAngleTurning<=91) {
                            e.target.style.opacity=1;
                            memoryFirstCardTarget.style.opacity=1;
                        }
                        if (currentAngleTurning<1) {
                            Card.kindCard_1="";
                            Card.kindCard_2="";
                            currentAngleTurning=180;
                            clearTimeout(intervalid);
                        }
                    }
                }
            }, 20);
        }

    /*
    if (!Card.kind_card_1) {
        Card.kind_card_1=this.face_card;
        e.target.style.animation="equal_2 1.4s ease-in forwards";
        memory_first_card_target=e.target;
        this.style.animation="turning_first_card 1s ease-in forwards";
        memory_first_card=this;
           
    }
    else if (!Card.kind_card_2 && e.target!=memory_first_card_target) {
        Card.kind_card_2=this.face_card;
        if (Card.kind_card_1==Card.kind_card_2) {
            e.target.style.animation="equal_2 4s ease-in forwards";
            this.style.animation="equal_1 4s ease-in forwards";
            memory_first_card.style.animation="equal_for_first_card 1s ease-in forwards";
            memory_first_card.removeEventListener("click", click_Card);
            this.removeEventListener("click", click_Card);
            Card.num_called_cards++;
            Card.kind_card_1="";
            Card.kind_card_2="";
        }
        if (Card.kind_card_1!=Card.kind_card_2) {   
            if (this.count_click%2==0) {
                memory_first_card_target.style.animation="not_equal_for_first_card 2s ease-in forwards";
                memory_first_card.style.animation="turning_first_card2 2s ease-in forwards";
                e.target.style.animation="not_equal_2 4s ease-in backwards";
                this.style.animation="not_equal_1 4s ease-in backwards";
            }
            if (this.count_click%2!=0) {
                e.target.style.animation="not_equal_4 4s ease-in backwards";
                this.style.animation="not_equal_3 4s ease-in backwards";
                memory_first_card_target.style.animation="not_equal_for_first_card2 2s ease-in forwards";
                memory_first_card.style.animation="turning_first_card3 2s ease-in forwards";
            }
        this.count_click++;
        Card.kind_card_1="";
        Card.kind_card_2="";
        }
    } */
};


//function-constructor that adds instruction to menu

function MenuEnterGame() {
    MenuEnterGame.superclass.constructor.call(this);
    var elem=document.createElement("h2");
    var elemText=document.createTextNode("How to play:");
    elem.appendChild(elemText);
    this.frame.appendChild(elem);

    elem=document.createElement("p");
    elemText=document.createTextNode("Memory is a counter game where the object is to find pairs");
    elem.appendChild(elemText);
    this.frame.appendChild(elem);

    elem=document.createElement("p");
    elemText=document.createTextNode("When the game begins, all pictures are hidden");
    elem.appendChild(elemText);
    this.frame.appendChild(elem);

    elem=document.createElement("h2");
    elemText=document.createTextNode("To Play:");
    elem.appendChild(elemText);
    this.frame.appendChild(elem);

    elem=document.createElement("p");
    elemText=document.createTextNode("1. Select two cards to try to match the pictures");
    elem.appendChild(elemText);
    this.frame.appendChild(elem);

    elem=document.createElement("p");
    elemText=document.createTextNode("2. If you match the pictures you can go again");
    elem.appendChild(elemText);
    this.frame.appendChild(elem);

    elem=document.createElement("p");
    elemText=document.createTextNode("3. If they don't match it is the computer turn them");
    elem.appendChild(elemText);
    this.frame.appendChild(elem);

    elem=document.createElement("p");
    elemText=document.createTextNode("4. The player that finds all pairs wins!");
    elem.appendChild(elemText);
    this.frame.appendChild(elem);

    elem=document.createElement("p");
    elemText=document.createTextNode("5. Have Fun!");
    elem.appendChild(elemText);
    this.frame.appendChild(elem);
}

extend(MenuEnterGame, Menu);

//function-constructor that adds cards on game field

function GameField(paramCard, num, begin) {
    GameField.superclass.constructor.call(this);
    let cards=[];
    this.frame.num=num;
    this.frame.begin=begin;
    for (var i=0; i<num; i++) {
        cards[i]=new paramCard(num);
        cards[i].frame.addEventListener("click", clickCard);

        this.frame.appendChild(cards[i].frame);
    }    
}

extend(GameField, Menu);

//function-constructor that show result

function ResultField(duration) {
    ResultField.superclass.constructor.call(this);
    var minutes=Math.floor(Math.floor(duration/1000)/60);
    var seconds=Math.floor(duration/1000)-minutes*60;
    var elem=document.createElement("h1");
    var elemText=document.createTextNode("You won !!!! Your result "+minutes+" minutes "+seconds+" seconds");
    elem.appendChild(elemText);
    this.frame.appendChild(elem);   
}

extend(ResultField, Menu);

//function-constructor that creates main part of card (without any picture)

function Card() {
    this.frame=document.createElement("div"); 
    this.frame.style.backgroundColor="rgb(250, 250, 250)";
    this.frame.style.border="1px solid black";
    this.frame.style.display="inline-block";
    this.frame.faceCard="";
    this.frame.countClick=2;
}

Card.randomChoise=function(setImages, min) {
    var store1=[];
    var store2=[];
    return function(max) {
        do {
            var num_set=Math.floor(Math.random() * (max - min + 1)) + min;
        } while(store1.includes(num_set) && store2.includes(num_set))
        if (store1.includes(num_set))
            store2.push(num_set);
        else 
            store1.push(num_set);
        if (store1.length==max+1 && store2.length==max+1) {
            store1=[];
            store2=[];
        }
    return num_set; 
    };
};

Card.numCalledCards=0;  //variable counts the number of turned cards
Card.kindCard_1;         //variable defines the first opened card
Card.kindCard_2;         //variable defines the second opened card



//function-constructor that creates the first type of cards 

var setSmiles=["images/smile-1.jpg", "images/smile-2.jpg", "images/smile-3.jpg", "images/smile-4.jpg", "images/smile-5.jpg", "images/smile-6.jpg", "images/smile-7.jpg", "images/smile-8.jpg", "images/smile-9.jpg", "images/smile-10.jpg", "images/smile-11.jpg", "images/smile-12.jpg"];

var randomForSmiles=Card.randomChoise(setSmiles, 0);

function SmileCard(numCards) {
    SmileCard.superclass.constructor.call(this);
    this.frame.style.width="100px";
    this.frame.style.height="150px";
    this.elemShirt=document.createElement("img");
    this.elemShirt.setAttribute("src", "images/skirt-smile.jpg");

    this.elemShirt.style.width="100px";
    this.elemShirt.style.height="150px";
    var num=randomForSmiles(numCards/2-1);
    this.frame.faceCard=setSmiles[num];
    console.log(num);
    if (numCards==10) {
        this.frame.style.marginLeft="120px";
        this.frame.style.marginTop="40px";
    }
    if (numCards==18) {
        this.frame.style.marginLeft="90px";
        this.frame.style.marginTop="5px";
    }
    if (numCards==24) {
        this.frame.style.marginLeft="60px";
        this.frame.style.marginTop="5px";
    }
    this.frame.style.backgroundImage=`url(${setSmiles[num]})`;
    this.frame.style.backgroundSize="100px 150px";   
    this.frame.appendChild(this.elemShirt);
}

extend(SmileCard, Card);

var setPeople=["images/funny-people1.jpg", "images/funny-people2.jpg", "images/funny-people3.jpg", "images/funny-people4.jpg", "images/funny-people5.jpg", "images/funny-people6.jpg", "images/funny-people7.jpg", "images/funny-people8.jpg", "images/funny-people9.jpg", "images/funny-people10.jpg", "images/funny-people11.jpg", "images/funny-people12.jpg"];

var randomForPeople=Card.randomChoise(setPeople, 0);

function PeopleCard(numCards) {
    PeopleCard.superclass.constructor.call(this);
    this.frame.style.width="100px";
    this.frame.style.height="150px";

    this.elemShirt=document.createElement("img");
    this.elemShirt.setAttribute("src", "images/funny_man.jpg");
    this.elemShirt.style.width="100px";
    this.elemShirt.style.height="150px";

    var num=randomForPeople(numCards/2-1);
    this.frame.faceCard=setPeople[num];
    console.log(num);
    if (numCards==10) {
        this.frame.style.marginLeft="120px";
        this.frame.style.marginTop="40px";
    }
    if (numCards==18) {
        this.frame.style.marginLeft="90px";
        this.frame.style.marginTop="5px";
    }
    if (numCards==24) {
        this.frame.style.marginLeft="60px";
        this.frame.style.marginTop="5px";
    }
    this.frame.style.backgroundImage=`url(${setPeople[num]})`;
    this.frame.style.backgroundSize="100px 150px";

    this.frame.appendChild(this.elemShirt);
} 

extend(PeopleCard, Card);

//function-constructor that creates the third type of cards

var setFoolishCards=["images/foolish-cards_01.jpg", "images/foolish-cards_02.jpg", "images/foolish-cards_03.jpg", "images/foolish-cards_04.jpg", "images/foolish-cards_05.jpg", "images/foolish-cards_06.jpg", "images/foolish-cards_07.jpg", "images/foolish-cards_08.jpg", "images/foolish-cards_09.jpg", "images/foolish-cards_10.jpg", "images/foolish-cards_11.jpg", "images/foolish-cards_12.jpg"];

var randomForFoolishCards=Card.randomChoise(setFoolishCards, 0);

function FoolishCard(numCards) {
    FoolishCard.superclass.constructor.call(this);
    this.frame.style.width="100px";
    this.frame.style.height="150px";

    this.elemShirt=document.createElement("img");
    this.elemShirt.setAttribute("src", "images/sweater_foolish.jpg");
    this.elemShirt.style.width="100px";
    this.elemShirt.style.height="150px";

    var num=randomForFoolishCards(numCards/2-1);
    this.frame.faceCard=setFoolishCards[num];
    console.log(num);
    if (numCards==10) {
        this.frame.style.marginLeft="120px";
        this.frame.style.marginTop="40px";
    }
    if (numCards==18) {
        this.frame.style.marginLeft="90px";
        this.frame.style.marginTop="5px";
    }
    if (numCards==24) {
        this.frame.style.marginLeft="60px";
        this.frame.style.marginTop="5px";
    }
    this.frame.style.backgroundImage=`url(${setFoolishCards[num]})`;
    this.frame.style.backgroundSize="100px 150px";

    this.frame.appendChild(this.elemShirt);
}

extend(FoolishCard, Card);



