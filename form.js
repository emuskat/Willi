(function(){

window.addEventListener('load', function(){

var sourceControlId = 97716446, /** THE ID OF THE SENDER CONTROL */

targetControlId = 97670839, /** THE ID OF THE RECEIVER CONTROL **/

domAbstractionLayer = loader.getDOMAbstractionLayer(),

sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId);

sourceControlInstance.on('value-change', function(){

domAbstractionLayer.setControlValueById(

String(targetControlId),

domAbstractionLayer.getControlValueById(

String(sourceControlId)

)

);

});

domAbstractionLayer.setControlValueById(

String(targetControlId),

domAbstractionLayer.getControlValueById(

String(sourceControlId).concat("@email.com")
)

);

});

})();
