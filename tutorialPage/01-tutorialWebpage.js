let thoughts = ['<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>A moment of laxity begets a lifetime of heresy.</i><img src="skull.svg" height="20" width="20">', 
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>Reason begets doubt; Doubt begets heresy.</i><img src="skull.svg" height="20" width="20">', 
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>Revere the Omnissiah, for it is the source of all power.</i><img src="skull.svg" height="20" width="20">',
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>The Alien dream is to dance on the grave of Mankind.</i><img src="skull.svg" height="20" width="20">',
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>A broad mind lacks focus.</i><img src="skull.svg" height="20" width="20">',
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>A questioning mind betrays a treacherous soul.</i><img src="skull.svg" height="20" width="20">',
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>A small mind is easily filled with faith.</i><img src="skull.svg" height="20" width="20">',
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>It is better to self-destruct than acquiesce.</i><img src="skull.svg" height="20" width="20">',
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>Blessed are the Gun Makers.</i><img src="skull.svg" height="20" width="20">',
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>Blessed is the mind too small for doubt.</i><img src="skull.svg" height="20" width="20">',
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>Call no man happy until he is dead.</i><img src="skull.svg" height="20" width="20">',
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>Cast out the mutant, the traitor, the heretic. For every enemy without there are a hundred within.</i><img src="skull.svg" height="20" width="20">',
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>Contemplation is the womb of treachery.</i><img src="skull.svg" height="20" width="20">',
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>Courage is the Emperor’s gift: repay him with victory.</i><img src="skull.svg" height="20" width="20">',
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>Damnation is eternal.</i><img src="skull.svg" height="20" width="20">',
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>Doubt is a sign of weakness.</i><img src="skull.svg" height="20" width="20">',
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>Even a man who has nothing can still offer his life.</i><img src="skull.svg" height="20" width="20">',
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>Excuses are the refuge of the weak.</i><img src="skull.svg" height="20" width="20">',
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>You exist solely for the Emperor.</i><img src="skull.svg" height="20" width="20">',
'<img src="skull.svg" height="20" width="20"><b>Thought for the Day: </b><i>Faith is stronger than adamantium.</i><img src="skull.svg" height="20" width="20">', ]

function newQuote() {
    let randNum=Math.floor(Math.random() * (thoughts.length));
    document.getElementById('tFTD').innerHTML = thoughts[randNum];
}

newQuote();