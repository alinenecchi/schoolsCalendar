export function hitEvent (category, action, label) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action,
      {
        event_category: category,
        event_label: label
      }
    );
    // window.ga('send', {
    //   hitType: 'event',
    //   eventCategory: eventName,
    //   eventAction: category,
    //   eventLabel: label
    // });
  }
};

export function pageView () {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view');
    // window.ga('send', 'pageview');
  }
};
