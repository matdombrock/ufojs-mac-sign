import config from './config.mjs';
import verify from './core/verify.mjs';
import sign from './core/sign.mjs';
import submit from './core/submit.mjs';
export default {
	cmd: 'mac-sign-full',
	help: 'mac-sign-full <file> <auto> - Signs and submits the file to Apple',
	async script(args, ufo, tools){
        const {prompt} = tools;
        const targetFile = args[0];
        const auto =  args[1] || false;

        const devId = String(config.developer_id_application);
        const appleId =  config.apple_id;
        const password = config.password;
        const teamId = config.team_id;

        await sign(devId, targetFile, tools);
        
        await verify(2, targetFile, tools);
        
        if(auto === false){
            await prompt("Signed and verified. Continue?");
        }

        await submit(devId, targetFile, appleId, password, teamId, tools);
	}
}


