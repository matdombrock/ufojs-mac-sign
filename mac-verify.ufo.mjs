import verify from './core/verify.mjs';
export default {
	cmd: 'mac-verify',
	help: 'mac-verify <file> <verbose> - Verifies the file signature',
	async script(args, ufo, tools){
        const targetFile = args[0];
        const verbose =  args[1] || 0;
        await verify(verbose, targetFile, tools);
	}
}

