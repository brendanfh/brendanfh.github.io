function loadCardData(cardTemplateHolderId, cardHolderId, cardData) {
	$("#" + cardTemplateHolderId).load("/card.html", () => {
		let cardSource = $("#cardTemplate").text();
		let cardTemplate = Handlebars.compile(cardSource);

		let cardsHtml = cardTemplate(cardData);	
		$("#" + cardHolderId).replaceWith(cardsHtml);
	});
}
