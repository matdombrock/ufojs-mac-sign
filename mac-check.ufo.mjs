export default {
	cmd: 'mac-check',
	help: 'mac-check-sig <file> - Checks the file signature',
	async script(args, ufo, tools){
        const {$} = tools;
        await $`spctl -a -vvv -t install ${args[0]}`;
	}
}