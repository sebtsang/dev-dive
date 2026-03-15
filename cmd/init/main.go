package main

import (
	"context"

	"github.com/your-username/devdive/internal/cli"
)

func main() {
	cli.MainBinary("init", func(ctx context.Context, args []string) error {
		statePath, fromReadme, promptArgs, err := cli.ParseInitFlags(args)
		if err != nil {
			return err
		}
		return cli.ExecuteInit(ctx, statePath, fromReadme, promptArgs)
	})
}
