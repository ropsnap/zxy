<script>

	import axios from 'axios';

	// before performing proxied post request, 
	// we first change the proxy-server public ip.
	// so that we can for example to garantee 
	axios.get('http://default:default@zxysvcs.ddns.net:1036/change-ip', (res) => {
		
		let newip = res.data.newip,
			oldip = res.data.oldip
		
		console.log('	newip ', newip)
		console.log('	oldip ', oldip)

		axios.post('http://stripe.com/api/charge', {
			
			data: { 
				amount: 123,
				productid: 123,
				customerid: 123 
			},

		    proxy: {
		        host: 'zxysvcs.ddns.net',
		        port: 1035,
		        auth: { username: 'default', password: 'default' } 
		    }
		
		}, (res) => {

		})
	})
	
</script>