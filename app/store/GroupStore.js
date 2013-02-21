Ext.define('Meetcha.store.GroupStore', {
	extend: 'Meetcha.store.MeetupBase',
	config: {
		model: 'Meetcha.model.Group',
		proxy: {
			type: 'jsonp',
			url: serverUrl + 'php/groups.php',
			reader: {
				type: 'json',
				rootProperty: 'results',
				totalProperty: 'meta.total_count'
			}
		}
	}
});
