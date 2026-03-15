package main

import (
	"context"

	"github.com/your-username/devdive/internal/cli"
)

func main() {
	cli.MainBinary("run", func(ctx context.Context, args []string) error {
		statePath, err := cli.ParseStateFlag("run", args)
		if err != nil {
			return err
		}
		return cli.ExecuteRun(ctx, statePath)
	})
}
