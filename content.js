/*
 * ChatGPT Ad Hider: artisanal, hand-crafted duct tape.
 *
 * Built in a hurry. Its whole strategy is "hide the last child
 * and hope for the best." No tests, no architecture, no roadmap.
 * Just vibes and one MutationObserver.
 *
 * This is not senior-grade, production-ready, enterprise-scale
 * software, and it doesn't pretend to be. If ChatGPT changes
 * a single attribute, it will quietly stop working.
 */

const SELECTOR = '[data-conversation-screenshot-content]';

function hideLastChild() {
	const containers = document.querySelectorAll(SELECTOR);

	for (const container of containers) {
		const child = container.lastElementChild;

		if (!child || child.dataset.adHidden === 'true') {
			continue;
		}

		child.style.setProperty("display", "none", "important");
		child.dataset.adHidden = "true";
	}
}

const observer = new MutationObserver(() => {
	hideLastChild();
});

observer.observe(document.body, {
	childList: true,
	subtree: true
});

hideLastChild();
