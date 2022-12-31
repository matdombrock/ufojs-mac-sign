import config from './config.mjs';
import sign from './sign.mjs';
export default {
	cmd: 'mac-sign',
	help: 'iss - Checks the location of the international space station',
	async script(args, ufo, tools){
        const targetFile = args[0];
        const devId = String(config.developer_id_application);
        await sign(devId, targetFile, tools);
	}
}


