import verify from './verify.mjs';
export default {
	cmd: 'mac-verify',
	help: 'iss - Checks the location of the international space station',
	async script(args, ufo, tools){
        const targetFile = args[0];
        const verbose =  args[1] || 0;
        await verify(verbose, targetFile, tools);
	}
}

