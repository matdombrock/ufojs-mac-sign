export default {
	cmd: 'mac-file',
	help: 'iss - Checks the location of the international space station',
	async script(args, ufo, tools){
        const {$} = tools;
        await $`file ${args[0]}/Contents/MacOS/*`;
	}
}