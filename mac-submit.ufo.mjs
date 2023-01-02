import config from './config.mjs';
import submit from './core/submit.mjs';
export default {
	cmd: 'mac-submit',
	help: 'mac-submit <file> - Submits the file to Apple',
	async script(args, ufo, tools){
        const devId = String(config.developer_id_application);
        const appleId =  config.apple_id;
        const password = config.password;
        const teamId = config.team_id;
        const targetFile = args[0];
        await submit(devId, targetFile, appleId, password, teamId, tools);
	}
}