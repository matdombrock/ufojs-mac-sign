import config from './config.mjs';
import sign from './core/sign.mjs';
export default {
	cmd: 'mac-sign',
	help: 'mac-sign <file> - Signs the file with the configured settings',
	async script(args, ufo, tools){
        const targetFile = args[0];
        const devId = String(config.developer_id_application);
        await sign(devId, targetFile, tools);
	}
}


