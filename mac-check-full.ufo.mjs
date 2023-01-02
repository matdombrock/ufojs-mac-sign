import verify from './core/verify.mjs';
export default {
	cmd: 'mac-check-full',
	help: 'mac-check-full <file> <verbose> - Returns full file info',
	async script(args, ufo, tools){
        const {$, prompt} = tools;
        const targetFile = args[0];
        const verbose =  args[1] || 0;
        await verify(verbose, targetFile, tools);
        
        await prompt("Continue?");
        
        await $`spctl -a -vvv -t install ${targetFile}`;

        await prompt("Continue?");

        await $`file ${targetFile}/Contents/MacOS/*`;
	}
}

