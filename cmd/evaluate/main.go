package main

import (
	"context"

	"github.com/your-username/devdive/internal/cli"
)

func main() {
	cli.MainBinary("evaluate", func(ctx context.Context, args []string) error {
		statePath, err := cli.ParseStateFlag("evaluate", args)
		if err != nil {
			return err
		}
		return cli.ExecuteEvaluate(ctx, statePath)
	})
}
