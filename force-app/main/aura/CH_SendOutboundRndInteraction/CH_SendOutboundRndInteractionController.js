({
    init: function(component, event, helper) {
		var rndInteractionId = component.get("v.recordId");
		helper.sendOutboundRndInteraction(component, rndInteractionId);
	},

    closeErrorAlert: function (component, event, helper) {
        component.set("v.errorMessage", null);
    }
})