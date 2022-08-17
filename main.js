var knowledge = 0;

function knowledgeClick(number){
    knowledge = knowledge + number;
    document.getElementById("knowledge").innerHTML = knowledge;
};

var vocab = 0;

function buyvocab(){
    var vocabCost = Math.floor(50 * Math.pow(1.1,vocab));
    if(knowledge >= vocabCost){
        vocab = vocab + 1;
    	knowledge = knowledge - vocabCost;
        document.getElementById('vocab').innerHTML = vocab;
        document.getElementById('knowledge').innerHTML = knowledge;
    };
    var nextCost = Math.floor(50 * Math.pow(1.1,vocab));
    document.getElementById('vocabCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
	knowledgeClick(vocab);
	
}, 1000);