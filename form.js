function(){

window.addEventListener('load', function(){

var sourceControlId = 97670839, /** THE ID OF THE SENDER CONTROL */

targetControlId = 100598533 , /** THE ID OF THE RECEIVER CONTROL **/

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

String(sourceControlId)
)
);
});
}
