const axios = require('axios'),
		   express = require('express'),
		   { exec } = require('child_process'),
		   router = express.Router();

router.get('/test', function (req, res, next) {
	
	console.log('New request → /test')

  res.render('index', { title: 'Express' });
  res.status(200).send('ok, routes working')
  
})

router.get('/', function (req, res, next) {
	
	console.log('New request → /')

  res.status(200).send('ok, routes working')
})

router.get('/change-ip', async (req, resp, next) => {

	console.log("\n New ip change request → /change-ip")
	
	try	{
		
		let ares = await axios.get('http://api.ipify.org/')
		let oldip = ares.data

		execIpChange((newip) => {
			resp.status(200).send({ oldip, newip })
		})

	} catch (err) {
			console.error('Fail at fetching old ip')
			console.error('Error:', err)
			
			resp.status(500).send(err)
	}

	function execIpChange (cb) {

		exec('./ip-change.sh', async (error, stdout, stderr) => {
		    
		    try {
						let ares = await axios.get('http://api.ipify.org/')
						cb(ares.data)
		    } catch (err) {
						console.error('Fail at fetching new ip.')
						console.error('Error:', err)
						
						resp.status(500).send(err)
		    }

		    if (error !== null) {
		    	console.error('Fail at ip-change.sh execution.')
		      console.error(`Error: ${ error }`);  
		      
		      resp.status(500).send(error)
		    }
		})
	}
})

module.exports = router;